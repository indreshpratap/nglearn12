import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pinCode, indianMobile } from 'src/app-modules/app-shared/utils/custom.validator';
import { ApiClient } from 'src/app/providers/api.client';
import { CanDeactivateComponent } from 'src/app/guards/candeactivate.comp';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent extends CanDeactivateComponent {

  userForm: FormGroup;

  constructor(private api: ApiClient) {
    super('Are you sure want to navigate all your data will be lost?');

    this.userForm = new FormGroup({
      firstName: new FormControl('First', [Validators.required, Validators.maxLength(20),
      Validators.pattern(/[a-z]/)]),
      lastName: new FormControl(null, [Validators.required]),
      gender: new FormControl('Female', [Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      pincode: new FormControl(null, [Validators.required, pinCode]),
      mobile: new FormControl(null, [Validators.required, indianMobile]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      joiningDate: new FormControl(null, [Validators.required]),
    });
  }

  saveUser() {
    if (this.userForm.valid) {
      let formValue = this.userForm.value;
      this.api.post('admin/save-user', formValue).subscribe(res => {
        alert('User saved');
        this.userForm.reset();
      }, err => {
        // console.log(err);
        alert(err.error.data.error);
      })
    }
  }


}
