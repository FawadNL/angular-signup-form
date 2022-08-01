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
        if (password.includes(firstName)) {
          userForm.get('password')?.setErrors({ passwordIncludeFirst: true });
          return { error: false };
        } else if (password.includes(lastName)) {
          userForm.get('password')?.setErrors({ passwordIncludeLast: true });
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
  passwordCaseValidator(password: FormControl): {
    [key: string]: boolean;
  } | null {
    if (password.pristine) {
      return null;
    }
    const UPPERCASE_REGEXP = /^(?=.*[A-Z])/;
    if (!UPPERCASE_REGEXP.test(password.value)) {
      return {
        uppercaseError: true,
      };
    }
    const LOWERCASE_REGEXP = /^(?=.*[a-z])/;
    if (!LOWERCASE_REGEXP.test(password.value)) {
      return {
        lowercaseError: true,
      };
    }
    return null;
  }

  /**
   * @description Confirm password validator.
   */
  confirmPasswordValidator(): ValidatorFn {
    return (userForm): { [key: string]: boolean } | null => {
      const password = userForm.get('password')?.value;
      const confirmPass = userForm.get('confirm_password')?.value;
      if (confirmPass && password) {
        if (confirmPass !== password) {
          userForm
            .get('confirm_password')
            ?.setErrors({ passwordMissMatch: true });
          return { error: false };
        }
      }
      return null;
    };
  }
}
