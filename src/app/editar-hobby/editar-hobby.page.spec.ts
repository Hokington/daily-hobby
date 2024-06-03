import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarHobbyPage } from './editar-hobby.page';

describe('EditarHobbyPage', () => {
  let component: EditarHobbyPage;
  let fixture: ComponentFixture<EditarHobbyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHobbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
