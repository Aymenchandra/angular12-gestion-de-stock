import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produit } from '../product';


const httpOptions =
{
  Headers:new HttpHeaders
  ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
private apiUrl="http://localhost:5000/produit"
  constructor(
    private http:HttpClient
  ) { }
  getProduct():Observable<produit[]>{
    return this.http.get<produit[]>(this.apiUrl)
  }

  deleteProduct(ProductId:number):Observable<produit[]>{
    return this.http.delete<produit[]>(`${this.apiUrl}/${ProductId}`)
  }

  AddProduct(produit:produit):Observable<produit[]>{
    return this.http.post<produit[]>(`${this.apiUrl}`,produit)
  }
}
