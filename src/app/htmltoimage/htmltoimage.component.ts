import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-htmltoimage',
  templateUrl: './htmltoimage.component.html',
  styleUrls: ['./htmltoimage.component.css']
})
export class HtmltoimageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  captureScreen()
  {
    html2canvas(document.body).then(function(canvas) {
      // document.body.appendChild(canvas);
      var generatedImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      window.location.href=generatedImage;
    });
  }

}
