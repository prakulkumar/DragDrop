import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeLayoutComponent } from './tree-layout.component';

describe('TreeLayoutComponent', () => {
  let component: TreeLayoutComponent;
  let fixture: ComponentFixture<TreeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
