import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingdataComponent } from './sharingdata.component';

describe('SharingdataComponent', () => {
  let component: SharingdataComponent;
  let fixture: ComponentFixture<SharingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
