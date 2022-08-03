import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GestionDeStockComponent } from './component/gestion-de-stock/gestion-de-stock.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MaterialModule } from './material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCaptchaModule } from 'ngx-captcha';
import { StatistiqueComponent } from './component/statistique/statistique.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductComponent } from './component/product/product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './component/products/products.component';
import { ProductItemsComponent } from './component/product-items/product-items.component';
import { CategorysComponent } from './component/categorys/categorys.component';
import { CategoryItemsComponent } from './component/category-items/category-items.component';
import { FormsModule } from '@angular/forms';
import { FormulaireAddProductComponent } from './component/formulaire-add-product/formulaire-add-product.component';
import { Login1Component } from './login1/login1.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GestionDeStockComponent,
    StatistiqueComponent,
    ProductComponent,
    AddProductComponent,
    ProductsComponent,
    ProductItemsComponent,
    CategorysComponent,
    CategoryItemsComponent,
    FormulaireAddProductComponent,
    Login1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxCaptchaModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
