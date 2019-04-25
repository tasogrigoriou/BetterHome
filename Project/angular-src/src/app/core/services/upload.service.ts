import { Injectable } from '@angular/core';

const singleApiUrl = '/api/upload';
const multipleApiUrl = '/api/upload/multiple';


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

      xhr.open('POST', singleApiUrl);
      xhr.setRequestHeader('listingId', String(listingId));
      xhr.send(fd);
    });
  }

  uploadImages(files: File[], listingId: number = 0) {
    let fd = new FormData();
    let xhr = new XMLHttpRequest();
    for (let i = 0; i < files.length; i++) {
      fd.append('file', files[i], files[i].name);
    }

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('images uploaded');
            resolve(xhr.response);
          } else {
            console.log('failed to upload images');
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', multipleApiUrl);
      xhr.setRequestHeader('listingId', String(listingId));
      xhr.send(fd);
    });
  }

}
