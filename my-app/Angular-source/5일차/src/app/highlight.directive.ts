import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(public eleRef: ElementRef, public render: Renderer2) {}

  @Input('appHighlight') colorName: string;

  @HostListener('click') onMouseClick() {
    this.render.setStyle(this.eleRef.nativeElement, 'color', this.colorName);
  }
}
