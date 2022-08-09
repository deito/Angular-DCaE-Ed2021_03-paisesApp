import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( param ) => this.paisService.buscarPaisPorAlpha( param['id'] ) )
      )
      .subscribe( resp => {
        console.log('VerPaisComponent ngOnInit, activatedRoute.params:', resp);
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
