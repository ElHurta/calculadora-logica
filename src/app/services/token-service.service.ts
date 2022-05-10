import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  configUrl = 'assets/data/tokens.json';

  constructor( private http: HttpClient ) { }

  getTokens(){
    
    return this.http.get(this.configUrl);
  }

}
