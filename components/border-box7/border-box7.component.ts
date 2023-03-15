import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { BorderBase } from 'ngx-datav/core';

@Component({
  selector: 'dv-border-box7',
  templateUrl: './border-box7.component.html',
  styleUrls: ['./border-box7.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style]': '_getBoxShadowStyle()',
  },
})
export class BorderBox7Component extends BorderBase {
  boxNum: number = 7;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
    this.defaultColor = ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'];
  }
  _getBoxShadowStyle() {
    const { _colors, backgroundColor } = this;
    return `box-shadow: inset 0 0 40px ${_colors[0]}; border: 1px solid ${_colors[0]}; background-color: ${backgroundColor}`;
  }
}
