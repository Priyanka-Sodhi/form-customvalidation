import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static confirmPassword(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPass = control.get('confirmPass');
    if (password.pristine || confirmPass.pristine) {
      return null;
    }
    return password && confirmPass && password.value !== confirmPass.value
      ? { misMatch: true }
      : null;
  }
  static validatePatternFor(inputType: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let result: boolean;
      switch (inputType) {
        case 'name': {
          result = /^[A-Za-z\s]+$/.test(control.value);
          return !result ? { namePattern: true } : null;
        }
        case 'phone': {
          result = /^[0-9]*$/.test(control.value);
          return !result ? { phonePattern: true } : null;
        }
        case 'pan': {
          result = /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/.test(control.value);
          return !result ? { panPattern: true } : null;
        }
        default:
          return null;
      }
    };
  }
}
