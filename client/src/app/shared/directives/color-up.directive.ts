import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[colorUp]'
})
export class ColorUpDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string

  @Input() defaultColor: string = '#111827'
  @Input() highlightColor:string = '#1F2937'

  constructor() { }

  ngOninit() {
    this.backgroundColor = this.defaultColor
  }

}
