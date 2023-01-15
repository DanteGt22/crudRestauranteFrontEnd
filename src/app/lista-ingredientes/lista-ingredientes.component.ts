import { Component } from '@angular/core';
import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../ingrediente.service';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-lista-ingredientes',
  templateUrl: './lista-ingredientes.component.html',
  styleUrls: ['./lista-ingredientes.component.css']
})
export class ListaIngredientesComponent {

  ingredientes:Ingrediente[];

  constructor(private ingredienteServicio:IngredienteService){}

  ngOnInit(): void {

    this.obtenerIngredientes();

  }

  private obtenerIngredientes(){

    this.ingredienteServicio.obtenerListaIngredientes().subscribe(dato => {
      this.ingredientes = dato;
  });
  }

  eliminarIngrediente(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el ingrediente",
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
        this.ingredienteServicio.eliminarIngredinete(id).subscribe(dato => {
          console.log(dato);
          this.obtenerIngredientes();
          swal(
            'Ingrediente eliminado',
            'El Ingrediente ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }
}
