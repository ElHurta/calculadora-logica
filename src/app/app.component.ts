import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from './services/token-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  actualInput: string = '';
  foundSimbols: any = [];
  currentSimbols: any;

  constructor( private jsonService: TokenServiceService ) {}

  ngOnInit() {
    this.jsonService.getTokens().subscribe(data => {
      this.currentSimbols = data;
    }
    );
  }

  typeInput(event: any) {
    this.actualInput += event.target.value;
  }

  showSimbols(){
    this.foundSimbols = [];
    for(const key in this.currentSimbols) {
      if(this.currentSimbols.hasOwnProperty(key)) {
          var value = this.currentSimbols[key];
          if(this.actualInput.includes(value)) {
            this.foundSimbols.push({
              key: key,
              value: value
            });
          }
      }
    }
    console.log(this.foundSimbols);
  }
}
