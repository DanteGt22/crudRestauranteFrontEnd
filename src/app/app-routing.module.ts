import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarMenuComponent } from './actualizar-menu/actualizar-menu.component';
import { ActualizarRestauranteComponent } from './actualizar-restaurante/actualizar-restaurante.component';
import { ListaIngredientesComponent } from './lista-ingredientes/lista-ingredientes.component';
import { ListaMenusComponent } from './lista-menus/lista-menus.component';
import { ListaRestaurantesComponent } from './lista-restaurantes/lista-restaurantes.component';
import { RegistrarIngredienteComponent } from './registrar-ingrediente/registrar-ingrediente.component';
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { RegistrarRestauranteComponent } from './registrar-restaurante/registrar-restaurante.component';
import { RestauranteDetallesComponent } from './restaurante-detalles/restaurante-detalles.component';

const routes: Routes = [
  {path :'restaurantes', component:ListaRestaurantesComponent},
  {path :'', redirectTo:'restaurantes',pathMatch:'full'},
  {path: 'registrar-restaurante', component : RegistrarRestauranteComponent},
  {path:'actualizar-restaurante/:id', component : ActualizarRestauranteComponent},
  {path:'restaurante-detalles/:id', component : RestauranteDetallesComponent},
  {path :'menus', component:ListaMenusComponent},
  {path :'', redirectTo:'menus',pathMatch:'full'},
  {path: 'registrar-menu', component : RegistrarMenuComponent},
  {path:'actualizar-menu/:id', component : ActualizarMenuComponent},
  {path :'ingredientes', component:ListaIngredientesComponent},
  {path :'', redirectTo:'ingredientes',pathMatch:'full'},
  {path: 'registrar-ingrediente', component : RegistrarIngredienteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
