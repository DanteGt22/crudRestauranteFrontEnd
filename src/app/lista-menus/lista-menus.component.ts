import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import swal  from 'sweetalert2';

@Component({
  selector: 'app-lista-menus',
  templateUrl: './lista-menus.component.html',
  styleUrls: ['./lista-menus.component.css']
})
export class ListaMenusComponent {

  menus:Menu[];

  constructor(private menuServicio:MenuService, private router:Router){}

  ngOnInit(): void {
    this.obtenerMenus();
  }

  private obtenerMenus(){

    this.menuServicio.obtenerListaMenus().subscribe(dato => {
      this.menus = dato;
    })
  }

  actualizarMenu(id:number){
    this.router.navigate(['actualizar-menu', id]);
  }

  eliminarMenu(id:number){
    
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
          this.menuServicio.eliminarMenu(id).subscribe(dato => {
            console.log(dato);
            this.obtenerMenus();
            swal(
              'Restaurante eliminado',
              'El restaurante ha sido eliminado con exito',
              'success'
            )
          })
        }
      })
    }
  

}
