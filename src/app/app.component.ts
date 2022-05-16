import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from './services/token-service.service';
import { Symbol } from './interfaces/symbol.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  actualInput: string = '';
  foundSimbols: Symbol[] = [];
  currentSimbols: Symbol[] = [];
  symbolFound: boolean = true;

  constructor( private jsonService: TokenServiceService ) {}

  ngOnInit() {
    this.jsonService.getTokens().subscribe(data => {
      this.currentSimbols = data;
      console.log(this.currentSimbols);
    }
    );
  }

  typeInput(event: any) {
    this.actualInput += event.target.value;
  }

  showSimbols(){
    this.foundSimbols = [];

    // Find symbol in actualInput that dont match with any symbol in currentSimbols
    for(let i = 0; i < this.actualInput.length; i++){
      let actualSimbol = this.actualInput[i];
      this.symbolFound = false;
      for(let j = 0; j < this.currentSimbols.length; j++){
        let currentSimbol = this.currentSimbols[j];
        if(actualSimbol === currentSimbol.value){
          this.symbolFound = true;
          this.foundSimbols.push(currentSimbol);
          break;
        }
      }
      if(!this.symbolFound){
        console.log('No se encontró el simbolo: ' + actualSimbol);
      }
    }
  }

  deleteChar(){
    this.actualInput = this.actualInput.substring(0, this.actualInput.length - 1);
    this.foundSimbols = [];
  }
}
