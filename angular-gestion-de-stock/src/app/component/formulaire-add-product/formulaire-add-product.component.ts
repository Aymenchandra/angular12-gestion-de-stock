import { Component, OnInit } from '@angular/core';
import { produit } from 'src/app/product';
import { ProduitsService } from 'src/app/services/produits.service';
ProduitsService
@Component({
  selector: 'app-formulaire-add-product',
  templateUrl: './formulaire-add-product.component.html',
  styleUrls: ['./formulaire-add-product.component.css']
})
export class FormulaireAddProductComponent implements OnInit {
  produits:produit[]=[];
  constructor(private produitservice:ProduitsService) {}

  ngOnInit(): void {
  }

  addProduct(Produit:produit)
  {
    this.produitservice.AddProduct(Produit).subscribe((produit)=>this.produits.push(Produit))
    location.reload();
  }
}
