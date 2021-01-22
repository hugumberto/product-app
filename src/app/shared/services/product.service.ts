import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseHeaderContent = {
    'Content-Type': 'application/json',
  };
  protected httpOptions = {
    headers: new HttpHeaders({
      ...this.baseHeaderContent,
    }),
  };
  constructor(private http: HttpClient) {}
  getAll(): any {
    return this.http
      .get(
        'https://5ee744ce52bb0500161fd6e4.mockapi.io/products',
        this.httpOptions
      )
      .pipe(
        catchError((error: Response) => {
          return throwError(error);
        })
      );
  }
}
