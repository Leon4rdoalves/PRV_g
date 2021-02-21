import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Azul]'
})
export class AzulDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#0ff'
   }
}
