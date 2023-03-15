import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil, timer, Subscription } from 'rxjs';
import { AutoResize } from 'ngx-datav/core';
import { DigitalFlopConfig } from './digital-flop-config';
type Rows = {
  ceils: string[];
  rowIndex: number;
  scroll?: number | undefined;
}[];
@Component({
  selector: 'dv-digital-flop',
  templateUrl: './digital-flop.component.html',
  styleUrls: ['./digital-flop.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'dv-scroll-board',
  },
})
export class DigitalFlopComponent extends AutoResize implements OnInit {
  @Input() set config(config: Partial<DigitalFlopConfig>) {
    this._config = Object.assign(new DigitalFlopConfig(), config);
    this.stopAnimation();
    this.animationIndex = 0;
    this.calcData();
  }
  @Output() mouseover = new EventEmitter();
  @Output() click = new EventEmitter();
  _config: DigitalFlopConfig = new DigitalFlopConfig();
  headerStyle: object = {};
  rowsData: Rows = [];
  widths: number[] = [];
  heights: number[] = [];
  aligns: number[] = [];
  avgHeight = 0;
  needCalc = false;
  animationIndex = 0;
  rows: Rows = [];
  animationSub$ = new Subscription();
  updater = 0;
  constructor(
    eleRef: ElementRef,
    cdRef: ChangeDetectorRef,
    public domSanitizer: DomSanitizer
  ) {
    super(eleRef, cdRef);
  }
  ngOnInit() {}
  getHeaderStyle() {
    const { headerBGC, headerHeight } = this._config;
    this.headerStyle = {
      backgroundColor: headerBGC,
      lineHeight: headerHeight + 'px',
      height: headerHeight + 'px',
    };
  }
  calcData() {
    this.calcHeaderData();
    this.getHeaderStyle();
    this.calcRowsData();
    this.calcWidths();
    this.calcHeights();
    this.calcAligns();
    this.animation(true);
  }
  calcHeaderData() {
    let { header, index, indexHeader } = this._config;

    if (!header.length) {
      this._config.header = [];
      return;
    }
    header = [...header];
    if (index) header.unshift(indexHeader);
    this._config.header = header;
  }
  calcRowsData() {
    let { data, index, headerBGC, rowNum } = this._config;
    let { rowsData } = this;

    if (index) {
      data = data.map((row: string[], i) => {
        row = [...row];

        const indexTag = `<span class="index" style="background-color: ${headerBGC};">${
          i + 1
        }</span>`;

        row.unshift(indexTag);

        return row;
      }) as string[][];
    }

    rowsData = data.map((ceils, i) => ({ ceils, rowIndex: i }));

    const rowLength = data.length;

    if (rowLength > rowNum && rowLength < 2 * rowNum) {
      rowsData = [...rowsData, ...rowsData];
    }

    rowsData = rowsData.map((d, i) => ({ ...d, scroll: i }));
    this.rows = rowsData;
    this.rowsData = rowsData;
  }
  calcWidths() {
    const { width, rowsData } = this;

    const { columnWidth, header } = this._config;

    const usedWidth = columnWidth.reduce((all, w) => all + w, 0);

    let columnNum = 0;
    if (rowsData[0]) {
      columnNum = rowsData[0].ceils.length;
    } else if (header.length) {
      columnNum = header.length;
    }

    const avgWidth = (width - usedWidth) / (columnNum - columnWidth.length);

    const widths = new Array(columnNum).fill(avgWidth);

    this.widths = Object.assign(widths, columnWidth);
  }
  calcHeights(onresize = false) {
    const { headerHeight, rowNum, data, header } = this._config;
    const { height } = this;

    let allHeight = height;

    if (header.length) allHeight -= headerHeight;

    const avgHeight = allHeight / rowNum;

    this.avgHeight = avgHeight;

    if (!onresize) this.heights = new Array(data.length).fill(avgHeight);
  }
  calcAligns() {
    const { header, align } = this._config;

    const columnNum = header.length;

    let aligns = new Array(columnNum).fill('left');

    this.aligns = Object.assign(aligns, align);
  }
  async animation(start = false) {
    const { needCalc, calcHeights, calcRowsData } = this;

    if (needCalc) {
      calcRowsData();
      calcHeights();
      this.needCalc = false;
    }

    let { avgHeight, animationIndex, rowsData, updater } = this;
    let { waitTime, carousel, rowNum } = this._config;
    const rowLength = rowsData.length;

    if (rowNum >= rowLength) return;
    this.cdRef.markForCheck();
    if (start) {
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      if (updater !== this.updater) return;
    }

    const animationNum = carousel === 'single' ? 1 : rowNum;

    let rows = rowsData.slice(animationIndex);
    rows.push(...rowsData.slice(0, animationIndex));

    this.rows = rows.slice(0, carousel === 'page' ? rowNum * 2 : rowNum + 1);
    this.heights = new Array(rowLength).fill(avgHeight);
    this.cdRef.markForCheck();
    await new Promise((resolve) => setTimeout(resolve, 300));
    if (updater !== this.updater) return;

    this.heights.splice(0, animationNum, ...new Array(animationNum).fill(0));

    animationIndex += animationNum;

    const back = animationIndex - rowLength;
    if (back >= 0) animationIndex = back;

    this.animationIndex = animationIndex;
    this.cdRef.markForCheck();
    this.animationSub$ = timer(waitTime - 300)
      .pipe(takeUntil(this))
      .subscribe(() => this.animation());
  }
  stopAnimation() {
    const { updater } = this;
    this.updater = (updater + 1) % 999999;
    this.animationSub$.unsubscribe();
  }
  override onResize(): void {
    this.stopAnimation();
    this.calcWidths();
    this.calcHeights();
    this.animation();
  }
  handleHover(
    enter: boolean,
    overload?: { ri: number; ci: number; row: Rows[0]; ceil: string }
  ) {
    if (enter) this.mouseover.next(overload);
    if (!this._config.hoverPause) return;
    if (enter) {
      this.stopAnimation();
    } else {
      this.animation(true);
    }
  }
}
