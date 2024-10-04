import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductShopComponent } from "../../components/product-shop/product-shop.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ProductShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
