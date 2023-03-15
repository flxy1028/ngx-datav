import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { AutoResize } from './auto-size';
@Directive({
  host: {
    '[class]': "'block h-full w-full relative dv-border-box-'+boxNum",
  },
})
export abstract class BorderBase extends AutoResize implements OnInit {
  @Input() backgroundColor = 'transparent';
  @Input() set colors(colorArr: string[]) {
    this.mergeColor(colorArr);
  }
  _colors: string[] = [];
  abstract boxNum: number;
  defaultColor = ['#4fd2dd', '#235fa7'];
  constructor(eleRef: ElementRef, cdRef: ChangeDetectorRef) {
    super(eleRef, cdRef);
  }
  ngOnInit(): void {
    this.mergeColor(this._colors);
  }
  nTos(num: number) {
    return String(num);
  }
  private mergeColor(colors: string[]) {
    const { defaultColor } = this;
    this._colors = Object.assign(defaultColor, colors);
  }
}
