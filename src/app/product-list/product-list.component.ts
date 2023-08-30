import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  selectedProduct: any;

  products =[ {
    id: 1,
    name: 'Iphone 14',
    description: 'El mejor celular del mundo',
    price: 1500,
    stock: 0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGM9RXzQeM_MPGvTgC0qRLHji-vmlM5SA8w&usqp=CAU'
  },

  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: 'El segundo mejor celular del mundo',
    price: 1500,
    stock: 10,
    image: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/02/Galaxy-S21-Plus-promos.jpg?quality=100&strip=info'
  },

  {
    id: 3,
    name: 'Xiaomi mi 11',
    description: 'El tercer mejor celular del mundo',
    price: 1500,
    stock: 5,
    image: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/03/Xiaomi-Mi-11-Lite-caracteristicas-1.jpg?quality=100&strip=info'
  },
];

  handleProductSelected(product: any) {
    alert('Producto seleccionado: ' + product.id);
  }
}