import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompletedTask]'
})
export class CompletedTaskDirective {

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement.style.backgroundColor = 'red');
    console.log(this.el.nativeElement.querySelector('div'));
  }

}
