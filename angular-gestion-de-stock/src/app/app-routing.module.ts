import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormulaireAddProductComponent } from './component/formulaire-add-product/formulaire-add-product.component';
import { GestionDeStockComponent } from './component/gestion-de-stock/gestion-de-stock.component';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { StatistiqueComponent } from './component/statistique/statistique.component';

AppComponent
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"gestiondestock",component:GestionDeStockComponent},
  {path:"Statistique",component:StatistiqueComponent},
  {path:"add-product",component:FormulaireAddProductComponent},
  {path:"product",component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
