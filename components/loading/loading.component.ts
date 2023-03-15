import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'dv-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'dv-loading',
  },
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
