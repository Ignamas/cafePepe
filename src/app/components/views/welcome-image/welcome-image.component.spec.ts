import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeImageComponent } from './welcome-image.component';

describe('WelcomeImageComponent', () => {
  let component: WelcomeImageComponent;
  let fixture: ComponentFixture<WelcomeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
