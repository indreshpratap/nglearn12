import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent {

  userForm: FormGroup;
  constructor() {

    this.userForm = new FormGroup({
      firstName: new FormControl('First', [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      gender: new FormControl('Female', [Validators.required]),
      username: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }


}
