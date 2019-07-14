import { Component, OnInit } from '@angular/core';
import { CanDeactivateComponent } from 'src/app/guards/candeactivate.comp';
import { ApiClient } from 'src/app/providers/api.client';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leave-assign',
  templateUrl: './leave-assign.component.html',
  styleUrls: ['./leave-assign.component.scss']
})
export class LeaveAssignComponent extends CanDeactivateComponent implements OnInit {

  leaves;
  users;
  months= [{value:'JAN'},{value:'FEB'},{value:'MAR'},{value:'APR'},{value:'MAY'},{value:'JUN'},{value:'JUL'},{value:'AUG'},{value:'SEP'},{value:'OCT'},{value:'NOV'},{value:'DEC'}]

  form:FormGroup;
  defaultLeaveValues;

  constructor(private api:ApiClient,private fb:FormBuilder) { 
    super('Please confirm, your data will be lost?');
  }

  ngOnInit() {
    this.loadLeaves();
    this.loadUsers();
  }

onUserSelect(ev){
  this.form.get('leaves').patchValue(this.defaultLeaveValues);
}
  save(){

  }

  private loadLeaves(){
    this.api.get('admin/leaves').subscribe(res => {
      if (res.status) {
       this.leaves = res.data;
       this.prepareForm();
      }
    })
  }

 private loadUsers(){
    this.api.get('admin/users').subscribe(res=>{
      this.users = res.data;
    });
  }

 private prepareForm() {
    this.form = this.fb.group({
      user:[,[Validators.required]],
      month:[],
      leaves: this.addLeaveFormGroup()
    });
  }


  private addLeaveFormGroup(){
    let leaveGroup = {};
    let defaultVal= {};
    for(let leave of this.leaves){
      leaveGroup[leave._id] = [0,Validators.required];
      defaultVal[leave._id] = 0;
    };
    console.log(leaveGroup);
    this.defaultLeaveValues = defaultVal;
   return this.fb.group(leaveGroup);
  }

}
