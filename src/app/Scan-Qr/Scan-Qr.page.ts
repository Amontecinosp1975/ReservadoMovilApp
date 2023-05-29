import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Scan-Qr',
  templateUrl: 'Scan-Qr.page.html',
  styleUrls: ['Scan-Qr.page.scss']
})
export class Tab3Page {
  code:any;
  constructor(private barcodeScanner: BarcodeScanner, private rt:Router) {
  }

  ngOnInit() {
  }
  scan(){
    this.rt.navigate(['camara'])
  console.log('Hola eL BOTON FUNCIONA ')

  }

scan1(){
  this.barcodeScanner.scan().then(barcodeData => {
    this.code = barcodeData.text;
    console.log('Barcode data', this.code);
   }).catch(err => {
       console.log('Error', err);
   });

}

}
