import { NgModule } from '@angular/core';
import { LeaveTypesManagerComponent } from './pages/leave-types-manager/leave-types-manager.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routing';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LeaveTypesManagerComponent,AdminComponent],
    imports:[
    
       AppSharedModule,
        RouterModule.forChild(adminRoutes)
    ]
})
export class AdminModule {

}