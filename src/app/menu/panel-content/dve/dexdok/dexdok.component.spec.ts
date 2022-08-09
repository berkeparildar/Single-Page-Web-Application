import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexdokComponent } from './dexdok.component';

describe('DexdokComponent', () => {
  let component: DexdokComponent;
  let fixture: ComponentFixture<DexdokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DexdokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexdokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
