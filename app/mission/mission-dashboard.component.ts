import { Component, OnInit,Input } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero }        from '../hero';
import { HeroService } from '../hero.service';

import {Mission} from './mission';
import {MissionService} from './mission.service';

@Component({
  selector: 'mission-dashboard',
  templateUrl: 'app/mission/mission-dashboard.component.html',
  styleUrls: ['app/mission/mission-dashboard.component.css']
})
export class MissionDashboardComponent implements OnInit {
  missions: Mission[] = [];
  navigated = false; // true if navigated here
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private missionService: MissionService,
    private heroService: HeroService) {
  }

  ngOnInit() {
   this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = params['id'];
        this.navigated = true;
        this.missionService.getMissions(id)
            .then(
              missions => 
              this.missions = missions);
       
      } else {
        this.navigated = false;
        this.missions = new Array<Mission>();
      }
    });
  }

  gotoDetail(mission: Mission) {
    let link = ['/mission-detail', mission._id];
    this.router.navigate(link);
  }
}
