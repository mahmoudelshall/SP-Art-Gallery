import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogsComponent } from './edit-dialogs.component';

describe('EditDialogsComponent', () => {
  let component: EditDialogsComponent;
  let fixture: ComponentFixture<EditDialogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDialogsComponent]
    });
    fixture = TestBed.createComponent(EditDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
