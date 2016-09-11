import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import{ConnectionProvider} from '../connection-provider/app.config';
import 'rxjs/add/operator/toPromise';

import { Mission } from './mission';

@Injectable()
export class MissionService {

  private missionUrl = `${ConnectionProvider.url}/missions`;  // URL to web api

  constructor(private http: Http) { }

  getMissions(_id: string) {
    return this.http.get(`${this.missionUrl}/heroMissions/${_id}`)
               .toPromise()
               .then((response)=>{
                 return response.json() as Mission[];
               })
               .catch(this.handleError);
  }

  getMission(_id: string) {
    return this.http.get(`${this.missionUrl}/${_id}`)
               .toPromise()
               .then((response) => {
                 return response.json() as Mission;
                })
                .catch(this.handleError);
  }

  save(mission: Mission): Promise<Mission>  {
    if (mission._id) {
      return this.put(mission);
    }
    return this.post(mission);
  }

  delete(mission: Mission) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.missionUrl}/${mission._id}`;

    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  // Add new Mission
  private post(mission: Mission): Promise<Mission> {
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
               .post(this.missionUrl, JSON.stringify(mission), {headers: headers})
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  // Update existing Mission
  private put(mission: Mission) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.missionUrl}/${mission._id}`;

    return this.http
               .put(url, JSON.stringify(mission), {headers: headers})
               .toPromise()
               .then(() => mission)
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