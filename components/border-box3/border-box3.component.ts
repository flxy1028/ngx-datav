import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ChangeDetectorRef,
  ViewEncapsulation,
} from '@angular/core';
import { BorderBase } from 'ngx-datav/core';

@Component({
  selector: 'dv-border-box3',
  templateUrl: './border-box3.component.html',
  styleUrls: ['./border-box3.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BorderBox3Component extends BorderBase {
  boxNum: number = 3;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
    this.defaultColor = ['#2862b7', '#2862b7'];
  }
}
