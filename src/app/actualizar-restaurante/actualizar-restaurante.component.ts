import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';


@Component({
  selector: 'app-actualizar-restaurante',
  templateUrl: './actualizar-restaurante.component.html',
  styleUrls: ['./actualizar-restaurante.component.css']
})

export class ActualizarRestauranteComponent implements OnInit{

  id:number;
  restaurante:Restaurante = new Restaurante();

  constructor(private restauranteService:RestauranteService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.restauranteService.obtenerRestaurantePorId(this.id).subscribe(dato => {
      this.restaurante = dato;
    });
  }

  irAlaListaDeRestaurantes(){
    this.router.navigate(['/restaurantes']);
    swal('restaurante actualizado', `El restaurante ${this.restaurante.razonSocial} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.restauranteService.actualizarRestaurante(this.id, this.restaurante).subscribe(dato => {
      this.irAlaListaDeRestaurantes();
    })
  }

}


