import { BorderBase } from 'ngx-datav/core';
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'dv-border-box4',
  templateUrl: './border-box4.component.html',
  styleUrls: ['./border-box4.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorderBox4Component extends BorderBase {
  @Input() reverse = false;
  boxNum: number = 4;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
    this.defaultColor = ['red', 'rgba(0,0,255,0.8)'];
  }
}
