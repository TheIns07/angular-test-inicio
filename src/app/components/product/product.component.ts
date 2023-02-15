import { Component, Input } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Product } from 'src/app/models/Product.model';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input () product!: Product;
}
