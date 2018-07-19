import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// URL API GITHUB V3
// https://api.github.com/users/{username}/repos

// USERNAMES SAMPLE
// leonardoballand
// facebook
// react-community
// letitbe133
// chlooe

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getRepositories() {
    return this.http.get('https://api.github.com/users/leonardoballand/repos');
  }

}
