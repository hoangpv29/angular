import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  // cac phuong thuc:

  getLish(): Observable<any> {
    return this.http.get<any>('https://63f65f1359c944921f730571.mockapi.io/products');
  }
  getbyId(id:any): Observable<any> {
    return this.http.get<any>('https://63f65f1359c944921f730571.mockapi.io/products/'+id);
  }

}
