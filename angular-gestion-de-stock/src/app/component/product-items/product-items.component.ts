import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { produit } from 'src/app/product';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input() produit:produit;
  @Output() onDeletedProduct:EventEmitter<number>= new EventEmitter();
  @Output() onUpdateProduct:EventEmitter<number>= new EventEmitter();
    constructor() {}

  ngOnInit(): void {
  }

  deleteProduct(ProduitId:number)
  {
    this.onDeletedProduct.emit(ProduitId);
  }
  updateProduct(produit:any)
  {
    this.onUpdateProduct.emit(produit);
  }
}
