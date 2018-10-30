import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _http: HttpClient) { }

  getRates(currency1: string, currency2: string)
  {

      return this._http.get('https://www.freeforexapi.com/api/live?pairs='+currency1+currency2)
      .pipe(map(result => result));
      
  }
}
