import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from './restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  //es la url que conecta con el backend
  private baseURL = "http://localhost:8080/api/v1/restaurantes";

  constructor(private httpClient: HttpClient) { }

  //metodo para obtener los restaurantes
  obtenerListaRestaurantes():Observable<Restaurante[]>{
    return this.httpClient.get<Restaurante[]>(`${this.baseURL}`);
  }

  //este metodo nos sirve para registrar un restaurante
  registrarRestaurante(restaurante:Restaurante): Observable<Object>{
    return this.httpClient.post((`${this.baseURL}`), restaurante);
  }

  //este metodo sirve para actualizar el restaurante
  actualizarRestaurante(id:number,restaurante:Restaurante) :Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, restaurante);
  }

  //este metodo sirve para buscar un restaurante
  obtenerRestaurantePorId(id:number) :Observable<Restaurante>{
    return this.httpClient.get<Restaurante>(`${this.baseURL}/${id}`);
  }

  //este metodo sirve para eliminar el restaurante
  eliminarRestaurante(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

 
}
