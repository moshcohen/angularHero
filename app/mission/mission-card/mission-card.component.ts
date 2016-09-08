import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Mission }        from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'mission-card',
  templateUrl: 'app/mission-card/mission-card.component.html',
  styleUrls: ['app/mission-card/mission-card.component.css']
})
export class MissionCardComponent {
  @Input() mission:Mission;
 
}