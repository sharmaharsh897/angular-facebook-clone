import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media';

  imagePath: any= '/src/assets/logo.png';
  
  name: string="Harsh Sharma"
}
