import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  view1: [number,number] = [700, 300];
  view2: [number,number]=[500, 400];


  // options
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string ='below';

  colorScheme = {
    domain: ['yellow', 'blue', 'green', 'Red']
  };
  BarChart = [
    {
      "name": "Client",
      "value": 175.000
    },
    {
      "name": "Product",
      "value": 300.000
    },
  ];

  Product = [
    {
      "name": "Randa",
      "value": 8940000
    },
    {
      "name": "Clothes",
      "value": 5000000
    },
    {
      "name": "Cleaner",
      "value": 7200000
    },
    {
      "name": "Pcs",
      "value": 6200000
    },
    {
      "name": "Specs",
      "value": 4200000
    },
    {
      "name": "Shoes",
      "value": 8200000
    }
  ];
  Client = [
    {
      "name": "Man",
      "value": 8940000
    },
    {
      "name": "Woman",
      "value": 5000000
    },
    {
      "name": "Babes",
      "value": 7200000
    },
    {
      "name": "Kids",
      "value": 6200000
    },
  ];
  
  constructor() {
    //Object.assign(this, { single });
    

   }

   onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
  }

}
