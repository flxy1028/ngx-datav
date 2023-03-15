import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BorderBase } from 'ngx-datav/core';

@Component({
  selector: 'dv-border-box13',
  templateUrl: './border-box13.component.html',
  styleUrls: ['./border-box13.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorderBox13Component extends BorderBase {
  boxNum: number = 13;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
    this.defaultColor = ['#6586ec', '#2cf7fe'];
  }
}
