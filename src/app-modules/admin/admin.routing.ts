import { Routes } from "@angular/router";
import { LeaveTypesManagerComponent } from './pages/leave-types-manager/leave-types-manager.component';
import { AdminComponent } from './pages/admin/admin.component';

export const adminRoutes:Routes = [
    {path:"admin", component:AdminComponent,
    children:[
        {path:"manage-leave-types",component:LeaveTypesManagerComponent}

    ]}
];