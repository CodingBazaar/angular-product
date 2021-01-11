import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "add-product",
  templateUrl: "add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class CatalogViewComponent {
  log(x) {
    console.log(x);
  }
}
