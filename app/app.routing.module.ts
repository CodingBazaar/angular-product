import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeViewComponent } from "./views/home/home.component";
import { CatalogViewComponent } from "./views/add-product/add-product.component";

@NgModule({
  declarations: [HomeViewComponent, CatalogViewComponent],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: HomeViewComponent },
      { path: "add-product", component: CatalogViewComponent },
      { path: "**", redirectTo: "home" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
