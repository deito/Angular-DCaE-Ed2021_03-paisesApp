import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = 'Hola Mundo';

  constructor( private paisService: PaisService ) { }

  buscar(){
    console.log('Termino buscado:', this.termino);

    this.paisService.buscarPais( this.termino )
      .subscribe( resp => {
        console.log(resp);
      });
  }

}
