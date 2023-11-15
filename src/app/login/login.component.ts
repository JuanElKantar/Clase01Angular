import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Credencial {
  nombre: string;
  contraseña: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router) {}

  navegar() {
    const nombre = (document.getElementById("nombre") as HTMLInputElement)?.value || '';
    const password = (document.getElementById("password") as HTMLInputElement)?.value || '';

    const credencialesString = localStorage.getItem('data');
    
    if (credencialesString) {
      const credenciales: Credencial[] = JSON.parse(credencialesString);
      
      const credencialEncontrada = credenciales.find(credencial => 
        credencial.nombre === nombre && credencial.contraseña === password
      );

      if (credencialEncontrada) {
        console.log('Funciona redirección a dashboard');
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log('Funciona redirección a register');
        this.navegarRegister();
      }
    }
  }

  navegarRegister() {
    this.router.navigateByUrl('/register');
  }
}
