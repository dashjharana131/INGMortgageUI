import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerbarComponent } from './innerbar.component';

describe('InnerbarComponent', () => {
  let component: InnerbarComponent;
  let fixture: ComponentFixture<InnerbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
