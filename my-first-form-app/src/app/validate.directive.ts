import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[validate]',
    standalone: true
})
export class ValidateDirective {

  @Input("validate") validate: boolean = false;
  constructor(
    private el: ElementRef<any>
  ) { }

  @HostListener("keyup") keyup(){
    if(this.validate){
      this.el.nativeElement.className = "form-control is-valid"
    }else{
      this.el.nativeElement.className = "form-control is-invalid"
    }
  }

}
