import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class AlertService {

    constructor(private alertController: AlertController) {
        
     }

    async handleAlert(header: string, message: string, buttons: any) {
        const alert = await this.alertController.create({
            header: header,
            message: message,
            buttons: buttons,
            backdropDismiss: false
        });

        await alert.present();
        //TODO: Callback if DISSMISS
    }
}

// TODO: Multiple amount to cart