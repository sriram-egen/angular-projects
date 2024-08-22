import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBasicsComponent } from './component-basics.component';

describe('ComponentBasicsComponent', () => {
  let component: ComponentBasicsComponent;
  let fixture: ComponentFixture<ComponentBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBasicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
