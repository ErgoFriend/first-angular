import {Component, OnInit} from "@angular/core";
import {Product} from "../../shared/models/product";
import {ProductService} from "../../shared/services/product.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.sass"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute, // <= 追加
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // <= 変更
      this.productService.get(params["id"]).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }
}
