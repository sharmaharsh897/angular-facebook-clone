import { Component } from '@angular/core';

@Component({
  selector: 'app-cover-photo',
  templateUrl: './cover-photo.component.html',
  styleUrls: ['./cover-photo.component.scss']
})
export class CoverPhotoComponent {

  coverImageUrl: string = 'assets/images/cover.jpg'
}
