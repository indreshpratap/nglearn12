import { FormControl } from '@angular/forms';

export function pinCode(control: FormControl) {
    if (!control.value) return null; // no error

    if (/^[0-9]{6}$/.test(control.value) === false) {
        return { pincode: true }; //has pincode error
    } else {
        return null;// no error
    }

}

export function indianMobile(control: FormControl) {
    if (!control.value) return null; // no error

    if (/^91[0-9]{10}$/.test(control.value) === false) {
        return { indianMobile: true }; //has pincode error
    } else {
        return null;// no error
    }

}