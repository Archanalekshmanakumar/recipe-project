import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
// import { eventNames } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
   constructor(private authService: AuthService) {

   } 
  ngOnInit() {
    this.authService.autoLogin();
  }

}
