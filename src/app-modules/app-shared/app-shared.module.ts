import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './components/field-error.component';
import { PageComponent } from './components/page/page.component';
// primeng
import { CalendarModule } from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
    declarations: [
        HeaderComponent,
        FieldErrorComponent,
        PageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
//  primeng modules
        CalendarModule,
        CheckboxModule,
        DropdownModule
    ],
    exports: [
        //components
        HeaderComponent,
        FieldErrorComponent,
        PageComponent,
        // modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        //Prime ng modules
        CalendarModule,
        CheckboxModule,
        DropdownModule
    ],
    providers: [],
})
export class AppSharedModule { }