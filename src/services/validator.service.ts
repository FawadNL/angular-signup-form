import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  /**
   * @description Form group validator for password includes first or last name
   * @returns
   */
  passwordValidator(): ValidatorFn {
    return (userForm): { [key: string]: boolean } | null => {
      const firstName = userForm.get('firstName')?.value;
      const lastName = userForm.get('lastName')?.value;
      const password = userForm.get('password')?.value;
      if (firstName && lastName && password) {
        if (password.includes(firstName) || password.includes(lastName)) {
          userForm.get('password')?.setErrors({ passwordInclude: true });
          return { error: false };
        }
      }
      return null;
    };
  }

  /**
   * @description Function to do the case validation of password
   * @param password Password form control.
   *
   * Reference for reg Exp :
   * https://www.geeksforgeeks.org/check-if-a-string-contains-uppercase-lowercase-special-characters-and-numeric-values/
   */
  passwordCaseValidator(password: FormControl) {
    if (password.pristine) {
      return null;
    }
    const UPPERCASE_REGEXP = /^(?=.*[A-Z])/;
    // password.markAsTouched();
    if (!UPPERCASE_REGEXP.test(password.value)) {
      return {
        uppercaseError: true,
      };
    }
    const LOWERCASE_REGEXP = /^(?=.*[a-z])/;
    // password.markAsTouched();
    if (!LOWERCASE_REGEXP.test(password.value)) {
      return {
        lowercaseError: true,
      };
    }
    return null;
  }
}
