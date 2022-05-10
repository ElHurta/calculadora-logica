import { Component } from '@angular/core';
import { TokenServiceService } from './services/token-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( private jsonService: TokenServiceService ) {}

  actualInput: string = '';
  currentSimbols: string[] = [];

  typeInput(event: any) {
    console.log(event.target.value);
    this.actualInput += event.target.value;
  }

  showSimbols(){
    this.jsonService.getTokens().subscribe(
      (data: any) => {
        this.currentSimbols = data;
      }
    );
    
    console.log(this.currentSimbols);
  }
}
