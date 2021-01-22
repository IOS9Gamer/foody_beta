import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
  };

@Injectable()
export class HttpRequestService {
    constructor(private http: HttpClient){}

    private handleError(error: HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
            console.error("An error occurred:", error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${error.error}`
              );
        }
        return throwError(error);
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    public getListOfGroup(url: string): Observable<any> {

        // Call the http GET
        return this.http.get(url, httpOptions).pipe(
          map(this.extractData),
          catchError(this.handleError)
        );
    }
}