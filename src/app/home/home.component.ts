import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';

import { ProductsService } from '../services/product/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Home Component';
  products: Product[] = [];
  constructor(private apiService: ProductsService) {}
  ngOnInit(): void {
    this.apiService.getLish().subscribe((data) => {
      this.products = data;
    });
  }
}
