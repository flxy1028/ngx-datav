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
  selector: 'dv-border-box5',
  templateUrl: './border-box5.component.html',
  styleUrls: ['./border-box5.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorderBox5Component extends BorderBase {
  @Input() reverse = false;
  boxNum: number = 5;
  constructor(eleRef: ElementRef, ceRef: ChangeDetectorRef) {
    super(eleRef, ceRef);
    this.defaultColor = [
      'rgba(255, 255, 255, 0.35)',
      'rgba(255, 255, 255, 0.20)',
    ];
  }
}
