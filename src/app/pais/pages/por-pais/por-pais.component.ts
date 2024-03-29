import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    //console.log('Termino buscado:', this.termino);

    this.paisService.buscarPais( this.termino )
      .subscribe( {
        next: (paises) => {
          this.paises = paises;
          console.log(paises);
        },
        error: (err) => {
          this.hayError = true;
          this.paises = [];
          console.log('Error');
          console.info(err);
        }
      } );
  }

  sugerencias( termino: string){
    this.hayError = false;
    // TODO: crear sugerencias
    console.log('func sugerencias:', termino);
  }

}
