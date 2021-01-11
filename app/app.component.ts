import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div class="container text-center">
      <a routerLinkActive="active" routerLink="/home">Home</a> |

      <a routerLinkActive="active" routerLink="/add-product">Add Product</a>

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {}
