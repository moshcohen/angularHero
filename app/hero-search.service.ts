import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {ConnectionProvider} from './connection-provider/app.config';
import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  private heroesUrl = `${ConnectionProvider.url}/heroes`;  
  search(term: string) {
    return this.http
               .get(`${this.heroesUrl}/?name=${term}`)
               .map((r: Response) => r.json() as Hero[]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/