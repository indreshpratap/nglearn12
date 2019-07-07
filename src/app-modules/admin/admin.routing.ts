import { Routes } from "@angular/router";
import { LeaveTypesManagerComponent } from './pages/leave-types-manager/leave-types-manager.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DeactivateGuard } from 'src/app/guards/deactivate.guard';

export const adminRoutes: Routes = [
    {
        path: "admin", component: AdminComponent, canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: "manage-leave-types", component: LeaveTypesManagerComponent, canDeactivate: [DeactivateGuard] },
            { path: "manage-user", component: ManageUserComponent, canDeactivate: [DeactivateGuard] },

        ]
    }
];