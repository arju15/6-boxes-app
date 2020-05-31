import { Component } from '@angular/core';

@Component({
  selector: 'image-component',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  // File Array to store image
  fileArray = new Array<any>();
  activeFile: any;

 //Get and push image into array
  onFileUpload(event, i) {
    console.log(event, i)
    let self = this;
    this.activeFile = event[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      self.fileArray.push(reader.result);
    };
    reader.readAsDataURL(this.activeFile);
  } 

 //Remove image from array
  removeImage(i){
    //while removing add null into that index
    this.fileArray[i] = null;
    //remove null element from array
    const itemIndex = this.fileArray.indexOf(null);
    if (itemIndex > -1) {
      //delete
      this.fileArray.splice(itemIndex, 1);
    }
   }
}
