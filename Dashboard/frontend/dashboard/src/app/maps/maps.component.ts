import { Component, OnInit } from '@angular/core';

interface Utility {
  name: string;
  file?: File;
  fileName?: string;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  utilities: Utility[] = [
    { name: 'Electricity' },
    { name: 'Water' },
    { name: 'Gas' },
    { name: 'Internet' }
  ];

  constructor() { }

  ngOnInit() {
    // Initialize component
  }

  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.utilities[index].file = file;
      this.utilities[index].fileName = file.name;
    }
  }

  onSubmit() {
    for (const utility of this.utilities) {
      if (utility.file) {
        console.log(`Uploading ${utility.name} bill:`, utility.file);
        // Add your upload logic here
      }
    }
    console.log('All files submitted');
  }
}
