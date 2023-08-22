import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userLoggedIn: boolean = false;

  toggleLoginStatus() {
    this.userLoggedIn = !this.userLoggedIn;
  }
  
  imagePath: string= '/assets/images/logo.png'
  imageDp: string='/assets/dp.jpeg'
  search : String ="";

  name: string="Harsh Sharma"

  getFirstName() {
    return this.name.split(' ')[0];
  }

}
