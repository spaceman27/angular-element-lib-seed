import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcoreComponent } from './matcore.component';

describe('MatcoreComponent', () => {
  let component: MatcoreComponent;
  let fixture: ComponentFixture<MatcoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
