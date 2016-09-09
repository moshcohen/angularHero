import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Mission }        from '../mission.ts';
import { MissionService } from '../mission.service';

@Component({
  selector: 'mission-card',
  templateUrl: 'app/mission/mission-card/mission-card.component.html',
  styleUrls: ['app/mission/mission-card/mission-card.component.css']
})
export class MissionCardComponent {
  @Input() mission:Mission;
 
}