import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusItem]'
})
export class FocusItemDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    this.focus('#273746');
  }

  private focus(color: String) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = color;
  }

}
