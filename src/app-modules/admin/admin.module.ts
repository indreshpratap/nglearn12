import { NgModule } from '@angular/core';
import { LeaveTypesManagerComponent } from './pages/leave-types-manager/leave-types-manager.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routing';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { LeaveAssignComponent } from './pages/leave-assign/leave-assign.component';

@NgModule({
    declarations: [LeaveTypesManagerComponent,AdminComponent, ManageUserComponent, LeaveAssignComponent],
    imports:[
    
         AppSharedModule,
        RouterModule.forChild(adminRoutes)
    ]
})
export class AdminModule {

}