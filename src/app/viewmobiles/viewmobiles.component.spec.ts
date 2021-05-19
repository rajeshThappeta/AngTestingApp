import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmobilesComponent } from './viewmobiles.component';

describe('ViewmobilesComponent', () => {
  let component: ViewmobilesComponent;
  let fixture: ComponentFixture<ViewmobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
