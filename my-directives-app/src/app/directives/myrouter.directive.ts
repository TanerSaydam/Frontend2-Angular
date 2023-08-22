import { Directive, DoCheck, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyrouter]',
  standalone: true
})
export class MyrouterDirective implements DoCheck {

  @Input("appMyrouter") appMyrouter:string = "";
  @Input("routerCheck") routerCheck: boolean = true;
  constructor(
    private el: ElementRef<any>,
    private router: Router
  ) { }

  ngDoCheck(): void {
    if(this.routerCheck){
      if(window.location.pathname === this.appMyrouter){
        this.el.nativeElement.style.backgroundColor = "black";
        this.el.nativeElement.style.color = "white";
      }else{
        this.el.nativeElement.style.backgroundColor = "white";
        this.el.nativeElement.style.color = "black";
      }
    }
    // console.log(window.location.pathname)   
  }

  @HostListener("click") myClickEvent(){
    this.router.navigateByUrl(this.appMyrouter);   
  }
}
