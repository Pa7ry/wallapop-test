import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './core/page/showcase/showcase.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ShowcaseComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
