import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import{ConnectionProvider} from './connection-provider/app.config';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = `${ConnectionProvider.url}/heroes`;  // URL to web api

  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then((response)=>{
                 return response.json() as Hero[];
               })
               .catch(this.handleError);
  }

  getHero(_id: string) {
    return this.getHeroes()
               .then((heroes) => {
                 return heroes.find(hero => hero._id === _id);
                });
  }

  save(hero: Hero): Promise<Hero>  {
    if (hero._id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero._id}`;

    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  // Update existing Hero
  private put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero._id}`;

    return this.http
               .put(url, JSON.stringify(hero), {headers: headers})
               .toPromise()
               .then(() => hero)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/