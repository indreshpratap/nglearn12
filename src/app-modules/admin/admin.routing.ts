import { Routes } from "@angular/router";
import { LeaveTypesManagerComponent } from './pages/leave-types-manager/leave-types-manager.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';

export const adminRoutes: Routes = [
    {
        path: "admin", component: AdminComponent,
        children: [
            { path: "manage-leave-types", component: LeaveTypesManagerComponent },
            { path: "manage-user", component: ManageUserComponent },

        ]
    }
];