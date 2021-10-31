import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // this.timeoutq();
  }

 varflecha =document.getElementById("flecha")!;

/* visible :Boolean =false; */
timeouta() {
  setTimeout(() => {
   /*  if(this.visible==false){
     this.visible=true;
   
    }
     else{
     this.visible=false;
    } */
    this.varflecha.classList.remove("invisible") ;
     this.varflecha.classList.add("visible") ;
    this.timeoutq();  
  }, 800);
}
timeoutq() {
  setTimeout(() => {
   /*  if(this.visible==false){
     this.visible=true;
   
    }
     else{
     this.visible=false;
    } */
     this.varflecha.classList.remove("visible") ;
     this.varflecha.classList.add("invisible") ;
    this.timeouta();  
  }, 800);
}

}
