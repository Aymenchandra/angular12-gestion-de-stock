import { Component, OnInit } from '@angular/core';
import { produit } from 'src/app/product';
import { ProduitsService } from 'src/app/services/produits.service';
@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {
  produits:produit[]=[];
  constructor(private produitservice:ProduitsService) { }

  ngOnInit(): void {
    this.getproducts();
    
  }

  getproducts()
  {
    this.produitservice.getProduct().subscribe((produits)=>(this.produits=produits))
  }

}
