import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  displayType: string = 'textarea'; // Initial display is textarea

   imagePath: string= '/assets/dp.jpeg'
   selectedImage: File | null = null;
   name: string="Harsh Sharma"

  // constructor(private httpClient: HttpClient) {}

  getFirstName() {
    return this.name.split(' ')[0];
  }

  showTextArea() {
    this.displayType = 'textarea';
  }

  showUploadButton() {
    this.displayType = 'upload';
  }

  goLive() {
    this.displayType = 'goLive';
  }


  // openFileInput() {
  //   const fileInput = document.createElement('input');
  //   fileInput.type = 'file';
  //   fileInput.accept = 'image/*';
  //   fileInput.style.display = 'none';
  //   fileInput.addEventListener('change', (event) => this.onFileSelected(event));
  //   document.body.appendChild(fileInput);
  //   fileInput.click();
  //   document.body.removeChild(fileInput);
  // }

  // onFileSelected(event: any) {
  //   const files: FileList = event.target.files;
  //   if (files.length > 0) {
  //     this.selectedImage = files[0];
  //   }
  // }

  // uploadImage() {
  //   if (this.selectedImage) {
  //     const formData = new FormData();
  //     formData.append('image', this.selectedImage);
  //     this.httpClient.post('/api/upload', formData).subscribe(
  //       (response) => {
  //         // Handle successful response from the server
  //         console.log('Image uploaded successfully:', response);
  //       },
  //       (error) => {
  //         // Handle error response from the server
  //         console.error('Error uploading image:', error);
  //       }
  //     );
  //   } else {
  //     console.log('No image selected.');
  //   }
  // }

  uploadImage() {
    // Logic to handle image upload
  }

  startLive() {
    alert('Open camera and go live');
  }
}

