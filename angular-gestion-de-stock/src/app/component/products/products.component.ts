import { Component, OnInit,Input} from '@angular/core';
import { produit } from 'src/app/product';
import { ProduitsService } from 'src/app/services/produits.service';
ProduitsService
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() produit:produit;
  produits:produit[]=[];
  constructor(private produitservice:ProduitsService) { }

  ngOnInit(): void {
    this.getproducts();
    console.log()
  }

  getproducts()
  {
    this.produitservice.getProduct().subscribe((produits)=>(this.produits=produits))
  }

  delete(produit:produit)
  {
    this.produitservice.deleteProduct(produit.id!).subscribe(
      ()=>(console.log("deleted product"))
      );
      this.getproducts();
      location.reload();
  }
  
}
