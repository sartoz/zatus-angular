import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZatPanelComponent } from './zat-panel.component';

describe('ZatPanelComponent', () => {
  let component: ZatPanelComponent;
  let fixture: ComponentFixture<ZatPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZatPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
