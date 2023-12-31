import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.background = 'yellow';
    el.nativeElement.style.fontWeight = 'bold';
   }

}
