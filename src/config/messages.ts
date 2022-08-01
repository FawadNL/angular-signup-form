export const SignUpValidatorMessages = {
  firstName: {
    invalid: 'Invalid first name',
    required: 'First name is required',
  },
  lastName: {
    invalid: 'Invalid last name',
    required: 'Last name is required',
  },
  email: {
    pattern: 'Invalid email address',
    required: 'Email is required',
  },
  password: {
    required: 'Password is required',
    minlength: 'Minimum 8 characters required',
    passwordIncludeFirst: 'Password should not include first name',
    passwordIncludeLast: 'Password should not include last name',
    uppercaseError: 'Password must have one uppercase',
    lowercaseError: 'Password must have one lowercase',
  },
  confirm_password: {
    required: 'Confirm password is required',
    passwordMissMatch: `Confirm password doesn't match`,
  },
};
