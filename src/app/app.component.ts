import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chart-demo';

  constructor(private sharedService: SharedService) { }

  triggerSecond() {
    this.sharedService.triggerSecondComponentFunction();
  }
}