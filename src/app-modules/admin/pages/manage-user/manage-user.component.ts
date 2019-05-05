import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pinCode, indianMobile } from 'src/app-modules/app-shared/utils/custom.validator';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent {

  userForm: FormGroup;

  constructor() {

    this.userForm = new FormGroup({
      firstName: new FormControl('First', [Validators.required, Validators.maxLength(20),
        Validators.pattern(/[a-z]/)]),
      lastName: new FormControl(null, [Validators.required]),
      gender: new FormControl('Female', [Validators.required]),
      username: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      pincode:new FormControl(null,[Validators.required, pinCode]),
      mobile:new FormControl(null,[Validators.required, indianMobile]) 
    });
  }


}
