import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  protected heroe: Heroe;

  constructor(
      private _activatedRoute: ActivatedRoute,
      private _heroeService: HeroesService
  ) {
    this._activatedRoute.params.subscribe( params => {
      // console.log(params['id'])
        this.heroe = this._heroeService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
