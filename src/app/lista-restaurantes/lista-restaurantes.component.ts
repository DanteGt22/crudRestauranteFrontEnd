import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-lista-restaurantes',
  templateUrl: './lista-restaurantes.component.html',
  styleUrls: ['./lista-restaurantes.component.css']
})
export class ListaRestaurantesComponent implements OnInit{
  [x: string]: any;

  restaurantes:Restaurante[];


  constructor(private restauranteServicio:RestauranteService, private router:Router){}

  ngOnInit(): void {
    this.obtenerRestaurantes();
  }

  actualizarRestaurante(id:number){
    this.router.navigate(['actualizar-restaurante',id]);
  }

  private obtenerRestaurantes(){

    this.restauranteServicio.obtenerListaRestaurantes().subscribe(dato => {
      this.restaurantes = dato;
    });
  }

  eliminarRestaurante(id:number){
      swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar al restaurante",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.restauranteServicio.eliminarRestaurante(id).subscribe(dato => {
            console.log(dato);
            this.obtenerRestaurantes();
            swal(
              'Restaurante eliminado',
              'El restaurante ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }
  

  verDetallesDelRestaurante(id:number){
    this.router.navigate(['restaurante-detalles',id]);

  }

}
