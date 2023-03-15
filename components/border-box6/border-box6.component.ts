import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BorderBase } from 'ngx-datav/core';

@Component({
  selector: 'dv-border-box6',
  templateUrl: './border-box6.component.html',
  styleUrls: ['./border-box6.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorderBox6Component extends BorderBase {
  boxNum: number = 6;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
    this.defaultColor = ['rgba(255, 255, 255, 0.35)', 'gray'];
  }
}
