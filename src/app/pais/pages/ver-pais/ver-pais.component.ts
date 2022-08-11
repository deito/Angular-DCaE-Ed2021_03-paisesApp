import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( param ) => this.paisService.buscarPaisPorAlpha( param['id'] ) ),
        tap( resp => console.log('tap:', resp) ) //tap( console.log )
      )
      .subscribe( resp => {
        console.log('VerPaisComponent ngOnInit, activatedRoute.params:', resp);
        this.pais = resp;
      });

    // this.activatedRoute.params
    //   .subscribe( params => {
    //     console.log(params);

    //     this.paisService.buscarPaisPorAlpha( params['id'] )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });

    //   })
  }

}
