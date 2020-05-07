import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescriptionPlanetsPage } from './description-planets.page';

describe('DescriptionPlanetsPage', () => {
  let component: DescriptionPlanetsPage;
  let fixture: ComponentFixture<DescriptionPlanetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionPlanetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionPlanetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
