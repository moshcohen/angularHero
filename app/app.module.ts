import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import {UserOptionsComponent} from './user-options/user-options.component';
import {HeroCardComponent} from './hero-card/hero-card.component';
import { HeroService }  from './hero.service';
import {MissionDashboardComponent} from './mission/mission-dashboard.component';
import {MissionCardComponent} from './mission/mission-card/mission-card.component';
import {MissionService} from './mission/mission.service';
import {MissionDetailComponent} from './mission/mission-detail/mission-detail.component';
import {HeroNameStartsWithPipe} from './pipes/heroes-by-name.pipe'

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    MdButtonModule, 
    MdCardModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    UserOptionsComponent,
    HeroCardComponent,
    MissionDashboardComponent,
    MissionCardComponent,
    MissionDetailComponent,
    HeroNameStartsWithPipe
  ],
  providers: [
    HeroService,
    MissionService
    // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    // { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/