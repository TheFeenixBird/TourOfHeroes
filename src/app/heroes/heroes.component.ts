import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
// Suppression de HEROES car présent dans HeroService
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit { 
    hero: Hero = {
        id : 1,
        name: 'Windstorm'
};

/* Propriété de la class HEROES */
//heroes = HEROES;
heroes: Hero[];
/* Permet de recupéré un héro unique */
selectedHero: Hero;


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Site d'injection // si possible ne pas utiliser le constructeur
  constructor(private heroService: HeroService) { }

  //Active l'affichage des heros // Initialise le directive donnée
  ngOnInit() {
    this.getHeroes();

  }

  //Fonction qui permet de récupérer les heroes dans le service
  getHeroes(): void {
   //this.heroes = this.heroService.getHeroes();
   this.heroService.getHeroes()
   // S'abonner pour recupérerer l'observable
    .subscribe(heroes => this.heroes = heroes)

  }





}
