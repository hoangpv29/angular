import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'http://localhost:8080/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  // Lấy danh sách sản phẩm
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  // Tìm kiếm sản phẩm theo tên
  searchProductsByName(name: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${name}`;
    return this.httpClient.get<Product[]>(searchUrl);
  }
}