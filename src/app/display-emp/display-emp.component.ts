import { Component , Input} from '@angular/core';
import { KENDO_GRID, RemoveEvent } from "@progress/kendo-angular-grid";
import { EmployeeModel } from '../model';
@Component({
  selector: 'app-display-emp',
  imports: [KENDO_GRID],
  templateUrl: './display-emp.component.html',
  styleUrl: './display-emp.component.css'
})
export class DisplayEmpComponent {
  @Input() empList : EmployeeModel[] = [];


  public removeHandler(event: RemoveEvent): void {
    const index = this.empList.findIndex(emp => emp.empid === event.dataItem.empid);
    if (index !== -1) {
      this.empList.splice(index, 1);
      localStorage.setItem("EmpData", JSON.stringify(this.empList))
    }
  }

  public clearAll(){
    this.empList = [];
    localStorage.setItem('EmpData',JSON.stringify(this.empList));
  }

}
