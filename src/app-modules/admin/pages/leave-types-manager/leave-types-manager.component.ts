import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-types-manager',
  templateUrl: './leave-types-manager.component.html',
  styleUrls: ['./leave-types-manager.component.scss']
})
export class LeaveTypesManagerComponent implements OnInit {

  typeName:string;
  constructor() { }

  ngOnInit() {
  }

}
