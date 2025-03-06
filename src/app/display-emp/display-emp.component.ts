import { Component , Input} from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { EmployeeModel } from '../model';
@Component({
  selector: 'app-display-emp',
  imports: [KENDO_GRID],
  templateUrl: './display-emp.component.html',
  styleUrl: './display-emp.component.css'
})
export class DisplayEmpComponent {
  @Input() empList : EmployeeModel[] = [];
}
