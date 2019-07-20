import {Component, OnInit} from "@angular/core";
import {Product} from "../../shared/models/product";
import {ProductService} from "../../shared/services/product.service";

class ProductListElement extends Product {
  // <= 追加
  hovered: boolean;
}

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.sass"]
})
export class ProductListComponent implements OnInit {
  products: Product[] = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.list().subscribe((products: Product[]) => {
      this.products = products.map((product: Product) => {
        return {
          // <= 変更
          ...product,
          hovered: false
        };
      });
    });
  }

  hovered(product: Product): void {} // <= 追加
  unhovered(product: Product): void {} // <= 追加
}
