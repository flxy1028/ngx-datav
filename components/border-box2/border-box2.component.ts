import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { BorderBase } from 'ngx-datav/core';

@Component({
  selector: 'dv-border-box2',
  templateUrl: './border-box2.component.html',
  styleUrls: ['./border-box2.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BorderBox2Component extends BorderBase {
  boxNum = 2;
  override defaultColor = ['#fff', 'rgba(255, 255, 255, 0.6)'];
  constructor(eleRef: ElementRef, cdRef: ChangeDetectorRef) {
    super(eleRef, cdRef);
  }
  get polylineInfo() {
    this.cdRef.markForCheck();
    const { width, height } = this;
    return {
      line0: `7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${
        height - 7
      }`,
      line1: `2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${
        height - 2
      } 2, 2`,
      line2: `6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${
        height - 6
      } 6, 6`,
    };
  }
}
