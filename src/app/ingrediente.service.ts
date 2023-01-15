import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingrediente } from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {


  //es la url que conecta con el backend
  private baseURL = "http://localhost:8080/api3/v1/ingredientes";

  constructor(private httpClient : HttpClient) { }

    //metodo para obtener los ingredientes
      obtenerListaIngredientes():Observable<Ingrediente[]>{
      return this.httpClient.get<Ingrediente[]>(`${this.baseURL}`);
    }

    //metodo para registrar los ingredientes
      registrarIngrediente(ingrediente:Ingrediente) : Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, ingrediente);
        }

              //este metodo sirve para eliminar el menu
      eliminarIngredinete(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
