import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  protected heroes: Heroe[] = [];
  protected searchFor = '';

  constructor(
      private _heroesService: HeroesService,
      private _activatedRoute: ActivatedRoute,
      private _router: Router
  ) {
  }

  ngOnInit() {
      this._activatedRoute.params.subscribe( params => {
          // console.log('in the service: ' + params['searchFor']);
          this.searchFor = params['searchFor'];
          this.heroes = this._heroesService.buscarHeroes(this.searchFor);
          console.log(this.heroes);
      });
  }

  verHeroe(id: number) {
      this._router.navigate(['/heroe', id]);
  }
}
