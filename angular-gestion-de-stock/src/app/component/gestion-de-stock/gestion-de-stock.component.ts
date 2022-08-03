import { Component, OnInit, } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-gestion-de-stock',
  templateUrl: './gestion-de-stock.component.html',
  styleUrls: ['./gestion-de-stock.component.css']

})
export class GestionDeStockComponent implements OnInit {
  opened:boolean=false;
  eye=faEye;
  show:string="";
  Checked1:boolean=false;
  constructor() { }

  
  ngOnInit(): void {
    
  }

  verif(event:any)
  {
    this.show=event.target.value;
    if(this.show == "1")
    {
      this.Checked1=true;
    }
    else
    {
      this.Checked1=false;
    }
  }
}
