import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective {

  constructor(
    private el: ElementRef<any>
  ) { }

  @HostListener("click") clickMetotAdi(){
    if(this.el.nativeElement.style.color === "red"){
      this.el.nativeElement.style.color = "green"
    }else{
      this.el.nativeElement.style.color = "red"
    }
  }

}
