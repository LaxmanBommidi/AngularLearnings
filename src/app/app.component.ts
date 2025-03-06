import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { DisplayEmpComponent } from './display-emp/display-emp.component';

@Component({
  selector: 'app-root',
  imports: [
    DisplayEmpComponent, 
    CommonModule, 
    CommonModule, 
    ReactiveFormsModule, 
    KENDO_GRID,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  states : string[] = ['Telangana' , 'Andrapradesh' , 'Tamilnadu' , 'Maharastra' , 'Uttarpradesh'];

  employeeForm: FormGroup = new FormGroup({});

  employeeObj: EmployeeModel = new EmployeeModel();

  employeeList: EmployeeModel[] = [];

  constructor(){
    this.createForm();
    const oldData = localStorage.getItem("EmpData");
    if(oldData != null) { 
      const parseData =  JSON.parse(oldData);
      this.employeeList =  parseData;
    }
  }

  onSave(){
    debugger;
    const oldData = localStorage.getItem('EmpData');
    if(oldData !== null)
    {
      const parseData =  JSON.parse(oldData);
      this.employeeForm.controls['empid'].setValue(parseData.length + 1);
      this.employeeList.push(this.employeeForm.value);
    }
    else {
      this.employeeList.unshift(this.employeeForm.value); 
    }
    localStorage.setItem("EmpData", JSON.stringify(this.employeeList))
    this.reset();
  }

  reset(){
    this.employeeObj = new EmployeeModel();
    this.createForm() 
  }
  onUpdate(){

  }
  createForm() {
    this.employeeForm = new FormGroup({
      empid: new FormControl(this.employeeObj.empid),
      name: new FormControl(this.employeeObj.name,[Validators.required]),
      city: new FormControl(this.employeeObj.city),
      address: new FormControl(this.employeeObj.address),
      contactNo: new FormControl(this.employeeObj.contactNo),
      emailId: new FormControl(this.employeeObj.emailId),
      pinCode: new FormControl(this.employeeObj.pinCode,[Validators.required,Validators.minLength(6)]),
      state: new FormControl(this.employeeObj.state) 
    })
  }

}


