import { Component, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/product/products.service';
@Component({
  selector: 'app-product_detail',
  templateUrl: './product_detail.component.html',
  styleUrls: ['./product_detail.component.css'],
})
export class Product_detailComponent implements OnInit {
  elementId: any;
  title = 'Product Detail';
  constructor(
    private apiService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.elementId = this.route.snapshot.params['id']; // Thay đổi ID tùy theo phần tử cần lấy
    console.log(this.elementId);
    this.apiService.getbyId(this.elementId).subscribe((data) => {
      console.log(data);
      this.elementId = data;
    });
  }
}
