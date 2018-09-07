import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home.component';
import { RockPaperScissorsModule } from '../../modules/rock-paper-scissors/rock-paper-scissors.module';



describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RockPaperScissorsModule],
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
