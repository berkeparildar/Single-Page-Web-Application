import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexeigComponent } from './dexeig.component';

describe('DexeigComponent', () => {
  let component: DexeigComponent;
  let fixture: ComponentFixture<DexeigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DexeigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexeigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
