import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> =[
    {
      "Id": 1,
      "Name": "Perle Noir",
      "Type": "House",
      "Price": "122000"
    },
    {
      "Id": 2,
      "Name": "Bateaux",
      "Type": "Appartement",
      "Price": "130000"
    },
    {
      "Id": 3,
      "Name": "Rèves",
      "Type": "Studio",
      "Price": "12000"
    },
    {
      "Id": 4,
      "Name": "Perle",
      "Type": "House",
      "Price": "122000"
    },
    {
      "Id": 5,
      "Name": "Perle Noir",
      "Type": "House",
      "Price": "122000"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
