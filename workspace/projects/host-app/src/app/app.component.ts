import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host-app';
  message = ''
  ngOnInit() {
    fromEvent(window,'event').subscribe((event:any)=>{
      this.message = event.detail;
    })
  }
}
