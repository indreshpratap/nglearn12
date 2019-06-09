import { Component, OnInit, ViewChild, DoCheck, OnDestroy } from '@angular/core';
import { ApiClient } from 'src/app/providers/api.client';

@Component({
  selector: 'app-leave-types-manager',
  templateUrl: './leave-types-manager.component.html',
  styleUrls: ['./leave-types-manager.component.scss']
})
export class LeaveTypesManagerComponent implements OnInit, DoCheck, OnDestroy {

  typeName: string = 'ABC';

  @ViewChild("leaveMgrForm") leaveForm;

  todos = [
    { text: 'abc', checked: false },
    { text: 'xyz', checked: false },
    { text: '123', checked: false },
  ]
  constructor(private api: ApiClient) {
    console.log('Calling constructor in leavetypesmanager component');
  }

  ngOnInit() {
    console.log('Calling ngOnInit in leavetypesmanager component');
    this.api.get('admin/leaves').subscribe(res => {
      if (res.status) {
        console.log('Data is', res.data)
      }


    })
  }

  ngDoCheck() {
    console.log('Calling ngDoCheck in leavetypesmanager component');
  }

  ngOnDestroy() {
    console.log('Calling ngOnDestroy in leavetypesmanager component');
  }

  save(form) {
    // console.log(form.value);
    console.log("A ViewChild Reference", this.leaveForm.value);
    this.typeName = form.value.leaveName;

    this.api.post('admin/save-leave', form.value).subscribe(res => {
      if (res.status) {
        alert('Leave saved');
        form.reset();
      }
    })
  }

  cancel() {

  }


  bulkAction() {
    let selectedTodos = this.todos.filter(todo => todo.checked);
    console.log("Bulk action on:", selectedTodos);

  }
}
