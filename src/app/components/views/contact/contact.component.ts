import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

formularioDeContacto:FormGroup;
 

  constructor(public formulario:FormBuilder) {

  this.formularioDeContacto=this.formulario.group({
    nombre:[''],
    correo:[''],
    mensaje:['']
    
  });

   }

  ngOnInit(): void {
  }

/*   enviarDatos():any{
console.log("Me presionaste");
console.log(this.formularioDeContacto.value);
  }
 */
  


}
