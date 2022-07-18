import { TestBed } from '@angular/core/testing';
import { FormControl, ValidatorFn } from '@angular/forms';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Password case validator should return object or null value', (done) => {
    expect(typeof service.passwordCaseValidator(new FormControl())).toBe(
      'object' || null
    );
    done();
  });
});
