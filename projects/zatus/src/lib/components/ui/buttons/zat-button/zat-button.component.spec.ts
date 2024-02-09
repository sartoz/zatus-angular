import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZatButtonComponent } from './zat-button.component';

describe('ZatButtonComponent', () => {
  let component: ZatButtonComponent;
  let fixture: ComponentFixture<ZatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZatButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
