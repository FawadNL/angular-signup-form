import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services';
import { ValidatorService } from '../services/validator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [UserService, ValidatorService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
