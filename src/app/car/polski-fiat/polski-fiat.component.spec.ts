/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolskiFiatComponent } from './polski-fiat.component';

describe('PolskiFiatComponent', () => {
  let component: PolskiFiatComponent;
  let fixture: ComponentFixture<PolskiFiatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolskiFiatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolskiFiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
