import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      // providers:
    });
    service = TestBed.inject(UserService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('API call should return object', (done) => {
    service
      .signupUser({ firstName: '', lastName: '', email: 'test@xyz.com' })
      .subscribe((val) => {
        expect(typeof val).toBe('object');
        done();
      });
  });
});
