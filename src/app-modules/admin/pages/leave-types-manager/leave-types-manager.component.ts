import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leave-types-manager',
  templateUrl: './leave-types-manager.component.html',
  styleUrls: ['./leave-types-manager.component.scss']
})
export class LeaveTypesManagerComponent implements OnInit {

  typeName:string = 'ABC';

  @ViewChild("leaveMgrForm") leaveForm;

  todos = [
    {text:'abc',checked:false},
    {text:'xyz',checked:false},
    {text:'123',checked:false},
]
  constructor() { }

  ngOnInit() {
  }

  save(form){
    // console.log(form.value);
    console.log("A ViewChild Reference",this.leaveForm.value);
    this.typeName= form.value.leaveName;
  }

  cancel(){

  }


  bulkAction(){
    let selectedTodos = this.todos.filter(todo=> todo.checked);
    console.log("Bulk action on:",selectedTodos);

  }
}
