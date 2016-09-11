import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';

import { Hero }        from '../../hero.ts';
import { HeroService } from '../../hero.service';
import { Mission }        from '../mission.ts';
import { MissionService } from '../mission.service';
@Component({
  selector: 'mission-detail',
  templateUrl: 'app/mission/mission-detail/mission-detail.component.html',
  styleUrls: ['app/mission/mission-detail/mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  @Input() mission: Mission;
  heroes:Hero[];
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  
  constructor(
    private heroService: HeroService,
    private router:Router,
    private route: ActivatedRoute,
    private missionService:MissionService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = params['id'];
        this.navigated = true;
        this.missionService.getMission(id)
            .then(mission => {
              this.mission = mission;

              this.heroService.getHeroesById([this.mission.assignee,
              this.mission.assigner,
              this.mission.target])
              .then(heroes=>this.heroes=heroes);
            });
      } else {
        this.navigated = false;
        this.mission = new Mission();
      }
    });
  }

  save() {
    this.missionService
        .save(this.mission)
        .then(mission => {
          this.mission = mission; // saved hero, w/ id if new
          this.goBack(mission);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedMission: Mission = null) {
    this.close.emit(savedMission);
    if (this.navigated) { window.history.back(); }
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero._id];
    this.router.navigate(link);
  }
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/