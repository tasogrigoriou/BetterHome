import { Injectable } from '@angular/core';

const apiUrl = '/api/upload';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  uploadImage(file: File, listingId: number = 0) {
    let fd = new FormData();
    let xhr = new XMLHttpRequest();
    fd.append('file', file, file.name);

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('image uploaded');
            resolve(xhr.response);
          } else {
            console.log('failed to upload image');
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', apiUrl);
      xhr.setRequestHeader('listingId', String(listingId));
      xhr.send(fd);
    });
  }

}
