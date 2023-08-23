import { Component,ElementRef, ViewChild } from '@angular/core';
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
   activeButton: string = 'make-post';
   @ViewChild('videoContainer') videoContainer!: ElementRef;
   isLive: boolean=false;
  // constructor(private httpClient: HttpClient) {}


  getFirstName() {
    return this.name.split(' ')[0];
  }

  showTextArea() {
    this.displayType = 'textarea';
    this.activeButton='make-post';
  }

  showUploadButton() {
    this.displayType = 'upload';
    this.activeButton='photo-album';
  }

  goLive() {
    this.displayType = 'goLive';
    this.activeButton='live-video';
  }
  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }
  
  uploadImage() {
    // Logic to handle image upload
    if (this.selectedImage) {
      // You can now perform actions with the selected image file, such as sending it to a backend API.
      // For demonstration purposes, we'll just log the file object.
      console.log('Selected Image:', this.selectedImage);
    } else {
      console.log('No image selected.');
    }
  }

  startLive() {
    // alert('Open camera and go live');
    const confirmation = window.confirm('Are you sure you want to start your live session?');
    if (confirmation) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          const videoElement = document.createElement('video');
          videoElement.srcObject = stream;
          videoElement.autoplay = true;
  
          if (this.videoContainer) {
            this.videoContainer.nativeElement.appendChild(videoElement);
          }
  
          this.isLive = true; // Set isLive flag to true
        })
        .catch((error) => {
          console.error('Error accessing webcam:', error);
          alert('Failed to access the webcam. Please check your browser settings.');
        });
    }
  }
  endLive() {
    const confirmation = window.confirm('Are you sure you want to end your live session?');
    if (confirmation) {
      const videoElement = this.videoContainer.nativeElement.querySelector('video');
      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject as MediaStream;
        const tracks = stream.getTracks();
  
        tracks.forEach(track => track.stop());
        videoElement.remove();
      }
  
      this.isLive = false; // Reset isLive flag to false
    }
    }
}

