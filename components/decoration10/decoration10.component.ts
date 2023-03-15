import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { DecorationBase } from 'ngx-datav/core';

@Component({
  selector: 'dv-decoration10',
  templateUrl: './decoration10.component.html',
  styleUrls: ['./decoration10.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.dv-decoration-10__reverse]': 'reverse',
  },
})
export class Decoration10Component extends DecorationBase {
  @Input() reverse = false;
  decorationNum = 10;
  defaultColor = ['#00c2ff', 'rgba(0, 194, 255, 0.3)'];
  isShow = true;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
  }
}
