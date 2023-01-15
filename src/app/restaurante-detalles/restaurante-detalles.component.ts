import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-detalles',
  templateUrl: './restaurante-detalles.component.html',
  styleUrls: ['./restaurante-detalles.component.css']
})
export class RestauranteDetallesComponent  {

  id:number;
  restaurante: Restaurante;

  constructor (private route:ActivatedRoute, private restauranteServicio:RestauranteService){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.restaurante = new Restaurante();
    this.restauranteServicio.obtenerRestaurantePorId(this.id).subscribe(dato => {
      this.restaurante = dato;
      swal( `Detalles del Restaurante ${this.restaurante.razonSocial}`);
    })
  }

}
