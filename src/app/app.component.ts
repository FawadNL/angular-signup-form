import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services';
import { ValidatorService } from 'src/services/validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userForm: FormGroup = new FormGroup({});
  public apiResponse: string = '';
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private validatorService: ValidatorService
  ) {
    this.initFormControl();
  }

  /**
   * @description Initiate form control
   */
  initFormControl() {
    this.userForm = this.fb.group(
      {
        firstName: this.fb.control('', [Validators.required]),
        lastName: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [
          Validators.required,
          Validators.minLength(8),
          this.validatorService.passwordCaseValidator,
        ]),
      },
      { validators: this.validatorService.passwordValidator() }
    );
  }

  /**
   * @description Function to submit form data.
   */
  signUp() {
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
