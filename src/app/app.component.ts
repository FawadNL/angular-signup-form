import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services';
import { ValidatorService } from 'src/app/services/validator.service';
import { SignUpValidatorMessages } from 'src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userForm: FormGroup = new FormGroup({});
  public apiResponse: string = '';
  // Validation messages for signup form.
  public ValidationMsg = SignUpValidatorMessages;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private validatorService: ValidatorService
  ) {
    this.initFormControl();
  }

  /**
   * @description Initialize form controls.
   *
   * @return { void } Void return.
   */
  initFormControl(): void {
    // const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
    this.userForm = this.fb.group(
      {
        firstName: this.fb.control('', [Validators.required]),
        lastName: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ]),
        password: this.fb.control('', [
          Validators.required,
          Validators.minLength(8),
          this.validatorService.passwordCaseValidator,
        ]),
        confirm_password: this.fb.control('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      {
        validators: [
          this.validatorService.passwordValidator(),
          this.validatorService.confirmPasswordValidator(),
        ],
      }
    );
  }

  /**
   * @description Function for user registration.
   * @return {void} Void return
   */
  signUp(): void {
    this.userService.signupUser(this.userForm.value).subscribe({
      next: (response) => {
        alert('User registration successful');
      },
      error: (err) => {
        alert('Something went wrong');
      },
    });
  }
}
