import {
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ChangeDetectorRef,
  Directive,
} from '@angular/core';
import {
  Subject,
  fromEvent,
  observeOn,
  animationFrameScheduler,
  takeUntil,
} from 'rxjs';
@Directive()
export class AutoResize
  extends Subject<void>
  implements AfterViewInit, OnDestroy
{
  width = 0;
  height = 0;
  constructor(private eleRef: ElementRef, protected cdRef: ChangeDetectorRef) {
    super();
  }
  ngAfterViewInit(): void {
    this.updateDomSize();
    this.resizeLintener();
  }
  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
  onResize() {}
  private resizeLintener() {
    fromEvent(window, 'resize')
      .pipe(observeOn(animationFrameScheduler), takeUntil(this))
      .subscribe(this.updateDomSize);
  }
  private updateDomSize = () => {
    const { eleRef } = this;
    const { clientWidth = 0, clientHeight = 0 } = eleRef.nativeElement || {};
    if (!eleRef) {
      console.warn(
        'Failed to get dom node, component rendering may be abnormal!'
      );
    } else if (!clientWidth || !clientHeight) {
      console.warn(
        'Component width or height is 0px, rendering abnormality may occur!'
      );
    }
    this.width = clientWidth;
    this.height = clientHeight;
    if (this.onResize && typeof this.onResize === 'function') this.onResize();
    this.cdRef.detectChanges();
  };
}
