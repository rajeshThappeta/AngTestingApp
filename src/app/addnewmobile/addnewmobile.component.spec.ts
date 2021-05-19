import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewmobileComponent } from './addnewmobile.component';

describe('AddnewmobileComponent', () => {
  let component: AddnewmobileComponent;
  let fixture: ComponentFixture<AddnewmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
