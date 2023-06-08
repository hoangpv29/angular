import { Component, Pipe, PipeTransform } from '@angular/core';
import { Product } from '../common/product';
import { ProductsService } from '../services/product/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchText: string = '';
  products: Product[] = [];

  constructor(private apiService: ProductsService) {}

  ngOnInit(): void {
    this.apiService.getProducts()?.subscribe((data) => {
      this.products = data;
    });
  }

  onSearch(searchText: string) {
    console.log(this.products);
    if (!searchText) {
      // Nếu chưa nhập từ khóa tìm kiếm thì hiển thị toàn bộ sản phẩm
      this.apiService.getProducts()?.subscribe((data) => {
        this.products = data;
        console.log(11);
        
      });
    } else {
      // Nếu đã nhập từ khóa tìm kiếm thì lọc danh sách sản phẩm
      this.apiService.searchProductsByName(searchText)?.subscribe((data) => {
        this.products = data;
        console.log(13);
        
      });
    }
  }
 
}


