import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BorderBase } from 'ngx-datav/core';
import { fade } from '@jiaminghi/color';
let numId = 0;
@Component({
  selector: 'dv-border-box12',
  templateUrl: './border-box12.component.html',
  styleUrls: ['./border-box12.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorderBox12Component extends BorderBase {
  @Input() reverse = false;
  boxNum: number = 12;
  filterId = `borderr-box-12-filterId-${numId}`;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
    this.defaultColor = ['#2e6099', '#7ce7fd'];
  }
  fade(num: number) {
    const { _colors, defaultColor } = this;
    return fade(_colors[1] || defaultColor[1], num);
  }
}
