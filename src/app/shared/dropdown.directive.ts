import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private dropDownRef: ElementRef<HTMLElement>) {}

  // @HostBinding('class.show') isOpen = false;

  @HostListener('click') toogleOpen() {

    this.dropDownRef.nativeElement
      .querySelector('.dropdown-menu')
      .classList.toggle('show');
  }
}
