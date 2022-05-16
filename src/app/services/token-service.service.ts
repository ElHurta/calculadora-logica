import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Symbol } from '../interfaces/symbol.interface';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  configUrl = 'assets/data/tokens.json';

  constructor( private http: HttpClient ) { }

  getTokens() : Observable<Symbol[]> {
    
    return this.http.get<Symbol[]>(this.configUrl);
  }

}
