import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './components/field-error.component';

@NgModule({
    declarations: [HeaderComponent, FieldErrorComponent],
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [
        HeaderComponent,
        FieldErrorComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class AppSharedModule { }