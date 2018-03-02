import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable() // Dépendances injectées
export class HeroService {
  //Déclare messageService en propriété privée
  // injection du message dans heroservice puis dans heroes component // Service en service
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: Fetched Heroes');
    return of(HEROES);
  }

/*
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  
  getHeroes(): Hero[] {
    return HEROES;
  }*/

}
