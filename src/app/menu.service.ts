import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  

  //es la url que conecta con el backend
  private baseURL = "http://localhost:8080/api2/v1/menus";

  constructor(private httpClient: HttpClient) { }

    //metodo para obtener los menus
    obtenerListaMenus():Observable<Menu[]>{
      return this.httpClient.get<Menu[]>(`${this.baseURL}`);
    }

    //metodo para registrar los menus
    registrarMenu(menu:Menu) : Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, menu);
    }

    
  //este metodo sirve para actualizar los menus
  actualizarMenu(id:number,menu:Menu) :Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, menu);
  }

    //este metodo sirve para buscar un menu
    obtenerMenuPorId(id:number) :Observable<Menu>{
      return this.httpClient.get<Menu>(`${this.baseURL}/${id}`);
    }

      //este metodo sirve para eliminar el menu
  eliminarMenu(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
