import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaRestaurantesComponent } from './lista-restaurantes/lista-restaurantes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarRestauranteComponent } from './registrar-restaurante/registrar-restaurante.component';
import { FormsModule } from '@angular/forms';
import { ActualizarRestauranteComponent } from './actualizar-restaurante/actualizar-restaurante.component';
import { RestauranteDetallesComponent } from './restaurante-detalles/restaurante-detalles.component';
import { ListaMenusComponent } from './lista-menus/lista-menus.component';
import { RegistrarMenuComponent } from './registrar-menu/registrar-menu.component';
import { ActualizarMenuComponent } from './actualizar-menu/actualizar-menu.component';
import { ListaIngredientesComponent } from './lista-ingredientes/lista-ingredientes.component';
import { RegistrarIngredienteComponent } from './registrar-ingrediente/registrar-ingrediente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaRestaurantesComponent,
    RegistrarRestauranteComponent,
    ActualizarRestauranteComponent,
    RestauranteDetallesComponent,
    ListaMenusComponent,
    RegistrarMenuComponent,
    ActualizarMenuComponent,
    ListaIngredientesComponent,
    RegistrarIngredienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
