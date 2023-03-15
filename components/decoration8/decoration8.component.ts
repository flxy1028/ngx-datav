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
  selector: 'dv-decoration8',
  templateUrl: './decoration8.component.html',
  styleUrls: ['./decoration8.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Decoration8Component extends DecorationBase {
  @Input() reverse = false;
  decorationNum = 8;
  defaultColor = ['#3f96a5', '#3f96a5'];
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
  }
  xPos(pos: number) {
    const { reverse, width } = this;

    if (!reverse) return pos;

    return width - pos;
  }
}
