import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreComponentComponent } from './centre-component.component';

describe('CentreComponentComponent', () => {
  let component: CentreComponentComponent;
  let fixture: ComponentFixture<CentreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
