import { Component, OnInit ,Input } from '@angular/core';
import { produit } from 'src/app/product';
@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {
  @Input() produit:produit;
  constructor() { }

  ngOnInit(): void {
  }

}
