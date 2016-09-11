import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Hero }        from '../../hero.ts';
import { HeroService } from '../../hero.service';
import { Mission }        from '../mission.ts';
import { MissionService } from '../mission.service';

@Component({
  selector: 'mission-card',
  templateUrl: 'app/mission/mission-card/mission-card.component.html',
  styleUrls: ['app/mission/mission-card/mission-card.component.css']
})
export class MissionCardComponent implements OnInit {
  @Input() mission:Mission;
  heroPicture:string;


  constructor(
    private heroService: HeroService
    ) {
  }
   ngOnInit() {
    this.heroService.getHeroPicture(this.mission.target)
       .then(picture => this.heroPicture = picture);
   }
}