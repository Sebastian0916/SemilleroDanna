import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCartaComponent } from './modelo-carta.component';

describe('ModeloCartaComponent', () => {
  let component: ModeloCartaComponent;
  let fixture: ComponentFixture<ModeloCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloCartaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeloCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
