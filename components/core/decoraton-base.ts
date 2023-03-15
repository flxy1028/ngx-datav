import { Directive, Input, OnInit } from '@angular/core';
import { AutoResize } from './auto-size';

@Directive({
  host: {
    '[class]': "'block h-full w-full dv-decoration-'+decorationNum",
  },
})
export abstract class DecorationBase extends AutoResize implements OnInit {
  abstract decorationNum: number;
  abstract defaultColor: string[];
  @Input() set colors(colorArr: string[]) {
    this.mergeColor(colorArr);
  }
  _colors: string[] = [];
  ngOnInit(): void {
    this.mergeColor(this._colors);
  }
  private mergeColor(colors: string[]) {
    const { defaultColor } = this;
    const len1 = colors.length;
    const len2 = defaultColor.length;
    if (len1 >= len2) {
      this._colors = [...colors];
    } else {
      this._colors = [...colors, ...defaultColor.slice(len1)];
    }
  }
}
