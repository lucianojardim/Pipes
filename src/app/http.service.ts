import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://angular2-course-60763.firebaseio.com/title.json') //reads a small JSON file
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user); //payload of the HTTP POST
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://angular2-course-60763.firebaseio.com/data.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://angular2-course-60763.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json()); // must be done to continue the execution of the Observable
  }
}
