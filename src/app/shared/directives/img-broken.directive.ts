import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const elImg =  this.elHost.nativeElement
    elImg.src = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"

  }
  constructor(private elHost: ElementRef) { }

}
