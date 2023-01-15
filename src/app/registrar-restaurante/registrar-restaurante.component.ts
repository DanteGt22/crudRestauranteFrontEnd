import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-registrar-restaurante',
  templateUrl: './registrar-restaurante.component.html',
  styleUrls: ['./registrar-restaurante.component.css']
})
export class RegistrarRestauranteComponent {

  restaurante : Restaurante = new Restaurante();

  constructor (private restauranteServicio:RestauranteService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.restaurante);
  }

  guardarRestaurante(){
    this.restauranteServicio.registrarRestaurante(this.restaurante).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeRestaurantes();

    }, error => console.log(error));
  }

  irALaListaDeRestaurantes(){
      this.router.navigate(['/restaurantes']);
  }

  onSubmit(){
    this.guardarRestaurante();
  }

}
