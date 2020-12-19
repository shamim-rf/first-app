import { FormControl, ValidatorFn } from '@angular/forms';

export function MobileValidatorFn(): ValidatorFn {
  const regex: RegExp = new RegExp('09([0-9]){9}$');
  debugger
  return (control: FormControl): { [key: string]: any } => {
    return regex.test(control.value) ? null : {
      mobileValidator: {
        valid: false
      }
    };
  };
};
