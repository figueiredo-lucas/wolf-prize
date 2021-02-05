import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import QRCode from 'easyqrcodejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('qrcode', { static: false }) qrcode: ElementRef;

  ngAfterViewInit(): void {

    // Options
    var options = {
      text: "Quero uma mamada",
      logo: "assets/wolf.jpg"
    }

    // Create new QRCode Object
    new QRCode(this.qrcode.nativeElement, options);
  }
}
