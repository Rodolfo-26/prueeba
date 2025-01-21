import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChekboxPage } from './chekbox.page';

describe('ChekboxPage', () => {
  let component: ChekboxPage;
  let fixture: ComponentFixture<ChekboxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
