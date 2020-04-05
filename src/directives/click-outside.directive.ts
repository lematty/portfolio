import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({ selector: '[clickoutside]'})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Output() clickoutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickoutside.emit(null);
    }
  }
}
