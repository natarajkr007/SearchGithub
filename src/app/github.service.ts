import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getUser(searchText): Observable<any> {
    const url = 'https://api.github.com/search/users?q=' + searchText;
    return this.http.get(url).map(
      res => {
        const data = res.json();
        return data;
      }
    );
  }

  getUserDetail(userName): Observable<any> {
    const url = 'https://api.github.com/users/' + userName;
    return this.http.get(url).map(
      res => {
        const data = res.json();
        return data;
      }
    );
  }

}
