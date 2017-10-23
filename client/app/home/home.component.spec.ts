import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from '../routing.module';

import { HomeComponent } from '../home/home.component';
import { SearchService } from '../services/search.service';

import { TweetComponent } from '../tweet/tweet.component';
import { TweetService } from '../services/tweet.service';


describe('Component: Home', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        SharedModule,
        RoutingModule
      ],      
      declarations: [ HomeComponent , TweetComponent],
      providers: [
        TweetService,
        SearchService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the string in h5', () => {
    const el = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(el.textContent).toContain('enter text and press enter');
  });

});
