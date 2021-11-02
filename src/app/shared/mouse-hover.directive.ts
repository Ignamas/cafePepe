import { transition,animate, animation } from '@angular/animations';
import { Directive,Renderer2, ElementRef, HostListener } from '@angular/core';
import { AboutComponent } from '../components/views/about/about.component';

@Directive({
  selector: '[mouseHover]'
})
export class MouseHoverDirective {
  @HostListener('mouseenter') onMouseOver(){
    
    this._render.setStyle(
      this._ElementRef.nativeElement,
      'transition', '0.3s all ease-in-out'
   )
   this._render.setStyle(
    this._ElementRef.nativeElement,
    'background-size', '180%'
 )
 this._render.setStyle(
  this._ElementRef.nativeElement,
  'background-position', 'center'
)
 }
 @HostListener('mouseleave') onMouseLeave(){
  this._render.setStyle(
     this._ElementRef.nativeElement,
     'background-size', '100%'
  )
  
}

  constructor(private _ElementRef:ElementRef,
    private _render:Renderer2

    ) { }

}
