import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'Reserva.page.html',
  styleUrls: ['Reserva.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  NgOnInit() {

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Importante',
      subHeader: 'Escanea el  codigo QR',
      message: 'Recuerda que debes validar tu reserva escaneando el codigo Qr dispuesto en cada espacio comun!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
