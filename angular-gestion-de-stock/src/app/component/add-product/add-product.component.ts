import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { produit } from 'src/app/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() onAddProduct:EventEmitter<produit>=new EventEmitter();
  photo:string;
  nom:string;
  description:string;
  quantite:string;
  prixAchat:string;
  prixVente:string;
  stockFaible:string;
  dateExpiration:string;
  categorie:string;
  n:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit()
  {
    if(!this.nom)
    {
      alert("error");
    }
      const newProduct ={
        id:this.n,
        photo:this.photo,
        nom:this.nom,
        description:this.description,
        quantite:this.quantite,
        prixAchat:this.prixAchat,
        prixVente:this.prixVente,
        stockFaible:this.stockFaible,
        dateExpiration:this.dateExpiration,
        categorie:this.categorie
      };
      this.n=this.n+1;
      this.onAddProduct.emit(newProduct);

      this.photo='';
      this.nom='';
      this.description='';
      this.quantite='';
      this.prixAchat='';
      this.prixVente='';
      this.stockFaible='';
      this.dateExpiration='';
      this.categorie='';
  }

}
