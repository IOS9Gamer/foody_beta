import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { trigger, transition, style, query, stagger, animate } from '@angular/animations'
import { AlertService } from '@services/AlertService';
import { HttpRequestService } from '@services/HttpRequestService';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'item-list',
  templateUrl: 'item-list.html',
  styleUrls: ['item-list.css'],
  animations: [
    trigger('slider', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0 }),
          stagger(10, [
            animate("100ms ease-in", style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class ItemList implements OnInit {

  test: Observable<any>;

  @Input
  /*
  storage = {
    fridge: {
      beverages: [{
        name: 'Getränke',
        content: [
          {
            name: 'Cola',
            quantity: [{
              value: 80,
              expiryDate: '22.10'
            }, {
              value: 80,
              expiryDate: '22.10'
            }],
            volume: 100,
            unit: 'ml',
            img: 'assets/images/cola.jpg',
            open: false
          }
        ]
      }]
    }
  }
  */

  @ViewChild('slider') slider: ElementRef;

  constructor(public alertService: AlertService, public httpClient: HttpClient) {}    

  url = "https://world.openfoodfacts.org/api/v0/product/4101530002505.json";

  ngOnInit() {
    this.httpClient.get(this.url).toPromise().then(data => {
      console.log(data);
    })
  }

  onToggleItem(selectedItem) {
    selectedItem.open = !selectedItem.open;
  }

  // Slider
  onUpdateValue(index: number, quantity, value: number) {
    quantity[index].value = value;
  }

  isEmptyAlert(index: number, item: any) {
    this.alertService.handleAlert(
      'Leer',
      'Wie möchtest du verfahren?',
      [{
        text: 'Zurück',
        role: 'cancel',
        cssClass: 'ion-color-primary-class',
        handler: () => {
          this.onEmptyCallback(index, 'cancel', item);
        }
      }, {
        text: 'Löschen',
        cssClass: 'ion-color-danger',
        handler: () => {
          this.onEmptyCallback(index, 'delete', item);
        }
      }, {
        text: 'Einkaufswagen',
        cssClass: 'ion-color-success-class',
        handler: () => {
          this.onEmptyCallback(index, 'toCart', item);
        }
      }]);
  }

  onEmptyCallback(index: number, type: string, item: any) {
    if (type === 'delete')
      this.deleteQuantity(index, item);
    else if (type === 'toCart')
      this.addItemToCart(item);
    else
      this.fillEmptyQuantity(index, item);
  }

  deleteQuantity(index: number, item: any) {
    item.quantity.splice(index, index + 1);
  }

  addItemToCart(item) {

  }

  fillEmptyQuantity(index: number, item: any) {
    item.quantity[index] = 10;
  }
}
