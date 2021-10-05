import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActorComponent } from './tabla-actor.component';

describe('TablaActorComponent', () => {
  let component: TablaActorComponent;
  let fixture: ComponentFixture<TablaActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
