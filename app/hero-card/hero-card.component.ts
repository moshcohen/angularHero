import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Hero }        from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-card',
  templateUrl: 'app/hero-card/hero-card.component.html',
  styleUrls: ['app/hero-card/hero-card.component.css']
})
export class HeroCardComponent {
  @Input() hero: Hero;
 
}