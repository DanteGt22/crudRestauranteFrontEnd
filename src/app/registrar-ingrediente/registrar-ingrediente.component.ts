import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../ingrediente.service';

@Component({
  selector: 'app-registrar-ingrediente',
  templateUrl: './registrar-ingrediente.component.html',
  styleUrls: ['./registrar-ingrediente.component.css']
})
export class RegistrarIngredienteComponent {

  ingrediente : Ingrediente = new Ingrediente();

  constructor (private ingredienteServicio: IngredienteService, private router:Router){}

  ngOnInit(): void {
    
  }

  guardarIngrediente(){
    this.ingredienteServicio.registrarIngrediente(this.ingrediente).subscribe(dato => {
      console.log(dato);
    })
  }

  irALaListaDeIngredientes(){
    this.router.navigate(['/ingredientes']);
  }

  onSubmit(){
    this.guardarIngrediente();
  }

}
