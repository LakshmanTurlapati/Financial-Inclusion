import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  endorsementLetter: { file?: File, fileName?: string } = {};

  constructor() { }

  ngOnInit() {
    // Initialize component
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.endorsementLetter.file = file;
      this.endorsementLetter.fileName = file.name;
    }
  }

  onSubmit() {
    if (this.endorsementLetter.file) {
      console.log('Uploading credit endorsement letter:', this.endorsementLetter.file);
      // Add your upload logic here
    } else {
      console.log('No file selected');
    }
  }
}