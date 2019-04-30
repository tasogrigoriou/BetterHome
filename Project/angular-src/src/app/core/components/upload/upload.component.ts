import {Component, Input} from '@angular/core';
import {UploadService} from "../../services/upload.service";

@Component({
  selector: 'upload-component',
  templateUrl: './upload.component.html',
  styleUrls: []
})
export class UploadComponent {

  @Input() listingId: number;

  constructor(private uploadService: UploadService) {}

  uploadMultipleImages(files: FileList | File): void {
    if (files instanceof FileList) {
      for (let i: number = 0; i < files.length; i++) {
        this.uploadService.uploadImage(files[i], this.listingId).subscribe(s => {
          console.log(s);
        },err => {
          console.log(err);
        });
      }
    }
    else {
      this.uploadService.uploadImage(files, this.listingId).subscribe(s => {
        console.log(s);
      }, err => {
        console.log(err);
      });
    }
  }
}
