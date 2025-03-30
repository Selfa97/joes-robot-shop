import { Component } from '@angular/core';
import { IProduct } from 'src/app/catalogue/product.model';

@Component({
  selector: 'bot-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  product: IProduct;

  constructor() {
    this.product = {
      id: 2,
      name: 'Friendly Bot',
      description: 'A friendly robot head with two eyes and a smile -- great for domestic use.',
      category: 'Heads',
      price: 945.0,
      discount: 0.2,
      imageName: 'head-friendly.png'
    };
  }
}
