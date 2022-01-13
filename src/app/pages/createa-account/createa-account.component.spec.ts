import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaAccountComponent } from './createa-account.component';

describe('CreateaAccountComponent', () => {
  let component: CreateaAccountComponent;
  let fixture: ComponentFixture<CreateaAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
