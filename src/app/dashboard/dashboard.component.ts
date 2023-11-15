import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Lista de rutas
  rutas: string[] = ['Ruta 1', 'Ruta 2', 'Ruta 3'];

  // Variable para almacenar el nombre de la nueva ruta
  nuevaRuta: string = '';

  constructor(public router: Router) { }

  navegarLogin() {
    this.router.navigateByUrl('/');
  }

  // Método para agregar una nueva ruta
  agregarRuta() {
    if (this.nuevaRuta.trim() !== '') {
      this.rutas.push(this.nuevaRuta);
      this.nuevaRuta = ''; // Limpiar el campo después de agregar la ruta
    }
  }
}