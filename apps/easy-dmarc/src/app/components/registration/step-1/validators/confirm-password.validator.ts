import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirm-password')?.value;
    return password === confirmPassword
        ? null
        : { PasswordNoMatch: true };
};