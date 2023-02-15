import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './models/Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  http = inject(HttpClient);
  products: Product[] = []

  changeTitle(){
    this.title = "Arturo";
  }

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data: any) => {
      this.products = data;
    })
  }
}
