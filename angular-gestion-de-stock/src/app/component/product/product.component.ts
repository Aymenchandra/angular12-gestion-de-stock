import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';
import { produit } from 'src/app/product';
ProduitsService
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  produits:produit[]=[];
  taille:number=0;
  show:boolean=true;
  constructor(private produitservice:ProduitsService) { }

  ngOnInit(): void {
     console.log(this.getProducts())
  }
  getProducts(){
    this.produitservice.getProduct().subscribe((res)=>console.log(res.length))
    
  }
}
