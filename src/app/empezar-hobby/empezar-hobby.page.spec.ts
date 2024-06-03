import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpezarHobbyPage } from './empezar-hobby.page';

describe('EmpezarHobbyPage', () => {
  let component: EmpezarHobbyPage;
  let fixture: ComponentFixture<EmpezarHobbyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpezarHobbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
