import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs';
import {trigger, style, transition, animate, state} from '@angular/animations'; 
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  
  
  //ANIMACION DE LAS FOTOS
  animations: [
    trigger('enterState',[
      state('void', style({
        transform: 'translateX(-100%)',
        opacity:0,
        
      })),
      transition(':enter',[
        animate(1200,
          
          style({
          transform: 'translateX(0)',
          opacity:1,
          offset: 1.2,
          
        }))
      ]),
     
    ]),
  
    trigger('enterState2',[
      state('void', style({
        transform: 'translateY(100%)',
        opacity:0,
        
      })),
      transition(':enter',[
        animate(1400,
          
          style({
          transform: 'translateX(0)',
          opacity:1,
          offset: 1.2,
          
        }))
      ]),
     
    ]),
  
    trigger('enterState3',[
      state('void', style({
        transform: 'translateX(100%)',
        opacity:0,
        
      })),
      transition(':enter',[
        animate(1800,
          
          style({
          transform: 'translateX(0)',
          opacity:1,
          offset: 1.2,
          
        }))
      ]),
     
    ])
  ]


})
export class ServicesComponent implements OnInit {
 
compreba:boolean=false

  constructor() { }

  ngOnInit(): void {
     
  }



  
  


}


