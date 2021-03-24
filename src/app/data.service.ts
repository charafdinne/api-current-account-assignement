import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';
import { catchError, map, tap } from 'rxjs/operators';
import { AccountCreationBody } from './requestBody';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCustomerUrl = "http://localhost:8080/api/getCustomer";
  createAccountUrl = "http://localhost:8080/api/createAccount";

  constructor(private http: HttpClient) {

  }

  getCustomer(customerId: number): Observable<Customer> {
    let params = new HttpParams().set("id", customerId.toString());
    return this.http.get<Customer>(this.getCustomerUrl, { params }).pipe(
      catchError(
        this.handleError<Customer>('getCustomer', undefined)
      ));
  }

  postAccount(customerId: number, balance: number) :Observable<Customer> {
    let body : AccountCreationBody = {
      customerId : customerId,
      balance : balance
    }
    return this.http.post<Customer>(this.createAccountUrl,body).pipe(
      catchError(
        this.handleError<Customer>('getCustomer', undefined)
      ));
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
