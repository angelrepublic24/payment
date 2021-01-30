import { Injectable } from '@angular/core';
import { Global } from './global';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

export class PaymentService{
  public url: string;

  constructor(private _http: HttpClient){
    this.url = Global.url
  }

  paymentRequest(paramers: Array<string>):Observable<any>{
    var params = JSON.stringify(paramers);
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'paymentRequest', {headers})
  }
}
