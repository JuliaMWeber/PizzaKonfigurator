import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePizzaComponent } from './customize-pizza.component';

describe('CustomizePizzaComponent', () => {
  let component: CustomizePizzaComponent;
  let fixture: ComponentFixture<CustomizePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
