import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { DecorationBase } from 'ngx-datav/core';

@Component({
  selector: 'dv-decoration2',
  templateUrl: './decoration2.component.html',
  styleUrls: ['./decoration2.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Decoration2Component extends DecorationBase {
  @Input() reverse = false;
  @Input() dur = 6;
  decorationNum = 2;
  defaultColor = ['#3faacb', '#fff'];
  x = 0;
  y = 0;
  w = 0;
  h = 0;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
  }
  calcSVGData() {
    const { reverse, width, height } = this;

    if (reverse) {
      this.w = 1;
      this.h = height;
      this.x = width / 2;
      this.y = 0;
    } else {
      this.w = width;
      this.h = 1;
      this.x = 0;
      this.y = height / 2;
    }
  }
  override onResize() {
    this.calcSVGData();
  }
}
