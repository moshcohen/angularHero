import { Component, OnInit,Input } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }        from '../hero';
import { HeroService } from '../hero.service';

import {Mission} from './mission';
import {MissionService} from './mission.service';

@Component({
  selector: 'mission-dashboard',
  templateUrl: 'app/mission-dashboard.component.html',
  styleUrls: ['app/mission-dashboard.component.css']
})
export class MissionDashboardComponent implements OnInit {
  @Input() hero: Hero;
  missions: Mission[] = [];

  constructor(
    private router: Router,
    private missionService: MissionService) {
  }

  ngOnInit() {
    this.missionService.getMissions(this.hero._id)
      .then(missions => this.missions = missions);
      console.log(this.missions);
  }

  gotoDetail(mission: Mission) {
    let link = ['/detail', mission._id];
    this.router.navigate(link);
  }
}
