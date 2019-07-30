import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTweetBoxComponent } from './post-tweet-box.component';

describe('PostTweetBoxComponent', () => {
  let component: PostTweetBoxComponent;
  let fixture: ComponentFixture<PostTweetBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTweetBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTweetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
