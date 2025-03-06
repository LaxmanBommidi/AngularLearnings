import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmpComponent } from './display-emp.component';

describe('DisplayEmpComponent', () => {
  let component: DisplayEmpComponent;
  let fixture: ComponentFixture<DisplayEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
