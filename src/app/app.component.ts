import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor(public authService: AuthService){}

  public logoutClick(e) {
    e.preventDefault();

    this.authService.signOut();
  }
}