import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qwerty',
  templateUrl: './qwerty.component.html',
  styleUrls: ['./qwerty.component.scss']
})
export class QwertyComponent implements OnInit {
  newEmployeeClicked = false;

  employees = [
    { name: 'Raj sekhar', position: 'Full Stack Dev'},
    { name: 'Ram Prasad', position: 'Recruiter Manager'},
    { name: 'Bhaskar Charan', position: 'Intern'}
  ];

  color;

  constructor() { }

  ngOnInit(): void {
  }

  model: any = {};
  model2: any = {}; 

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }
  deleteEmployee(i) {
    this.employees.splice(i);
    console.log(i);
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.position = this.employees[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for(let i = 0; i < this.employees.length; i++) {
      if(i == editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }


  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6';
     }
  }

}
