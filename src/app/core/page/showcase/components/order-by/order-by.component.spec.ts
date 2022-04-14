import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByComponent } from './order-by.component';

describe('OrderByComponent', () => {
  let component: OrderByComponent;
  let fixture: ComponentFixture<OrderByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderByComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change order when same filter is selected', () => {
    component.select('title', 0);
    expect(component.upward).toBe(false);
  });

  it('should order upward when change filter selected', () => {
    component.select('title', 3);
    expect(component.upward).toBe(true);
  });

  it('should emit orderSelected event', () => {
    spyOn(component.order, 'emit');
    component.select('title', 0);
    expect(component.order.emit).toHaveBeenCalledWith('title');
  });
});
