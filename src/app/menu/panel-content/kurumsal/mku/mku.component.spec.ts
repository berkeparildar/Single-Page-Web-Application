import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkuComponent } from './mku.component';

describe('MkuComponent', () => {
  let component: MkuComponent;
  let fixture: ComponentFixture<MkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
