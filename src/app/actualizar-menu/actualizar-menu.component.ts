import  swal  from 'sweetalert2';
import { Component } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-menu',
  templateUrl: './actualizar-menu.component.html',
  styleUrls: ['./actualizar-menu.component.css']
})
export class ActualizarMenuComponent{

  id:number;
  menu:Menu = new Menu();

  constructor(private menuService:MenuService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.menuService.obtenerMenuPorId(this.id).subscribe(dato => {
      this.menu = dato;
    });
    
  }

  irAlaListaDeMenus(){
    this.router.navigate(['/restaurantes']);
    swal('restaurante actualizado', `El restaurante ${this.menu.nombreMenu} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.menuService.actualizarMenu(this.id, this.menu).subscribe(dato => {
      this.irAlaListaDeMenus();
    })
  }

}
