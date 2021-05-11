import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  ChildInformation: string;

  person = {
    id: 1,
    firstName: "Joe",
    lastName: "Soap",
    age: 27
  }

  personList : Array<Person>;

  constructor() {
    this.personList = [
      {
        id: 1,
        firstName: "Joe",
        lastName: "Soap",
        age: 27
      },
      {
        id: 2,
        firstName: "Daniel",
        lastName: "Moshe",
        age: 35
      },
      {
        id: 3,
        firstName: "Seth",
        lastName: "Smith",
        age: 29
      }
    ];
   }

  ngOnInit() {
  }

  ReviceingChildComponentInformation(data){
    this.ChildInformation = data;
  }
}
