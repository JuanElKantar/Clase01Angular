import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Credencial {
  tipoID: string;
  ID: string;
  nombre: string;
  contraseña: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   public credenciales: Credencial[] = [];
  constructor(public router: Router){
    this.insertData()
  }
  insertData(){
    this.credenciales = [
     
      {
        tipoID: "CC",
        ID: "3131",
        nombre: "Fernandez",
        contraseña: "123"
      }
    ];

    localStorage.setItem('data', JSON.stringify(this.credenciales))
  }

  createUser(){
    const tipoID = (document.getElementById("tipoID") as HTMLSelectElement).value
    const ID = (document.getElementById("ID") as HTMLInputElement).value
    const nombre = (document.getElementById("name") as HTMLInputElement).value
    const password = (document.getElementById("pass") as HTMLInputElement).value
    console.log(tipoID,ID,nombre,password)

    const nuevasCredenciales={
      tipoID:tipoID,
      ID:ID,
      nombre:nombre, 
      contraseña:password
    }
    this.credenciales.push(nuevasCredenciales)

    localStorage.setItem('data', JSON.stringify(this.credenciales));
    this.clearForm()
  }

  clearForm() {
    (document.getElementById("tipoID") as HTMLSelectElement).value = "";
    (document.getElementById("ID") as HTMLInputElement).value = "";
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("pass") as HTMLInputElement).value = "";
  }

  navegarLogin(){
    this.router.navigateByUrl('/')
  }
}