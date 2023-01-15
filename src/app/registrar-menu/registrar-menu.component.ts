import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-registrar-menu',
  templateUrl: './registrar-menu.component.html',
  styleUrls: ['./registrar-menu.component.css']
})
export class RegistrarMenuComponent {

  menu: Menu = new Menu();

  constructor(private menuServicio:MenuService, private router:Router){}

  ngOnInit():void {
    
  }

  guardarMenu(){
    this.menuServicio.registrarMenu(this.menu).subscribe(dato => {
      this.irALaListaDeMenus();
      console.log(dato);

    });
  }

  irALaListaDeMenus(){
    this.router.navigate(['/menus'])
  }

  onSubmit(){
    this.guardarMenu();
  }

}
