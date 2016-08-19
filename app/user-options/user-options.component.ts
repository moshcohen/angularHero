import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }        from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'user-options',
  templateUrl: 'app/user-options/user-options.component.html',
  styleUrls: ['app/user-options/user-options.component.css']
})
export class UserOptionsComponent implements OnInit {
  
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    
  }

}