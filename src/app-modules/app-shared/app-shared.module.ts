import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './layout/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [HeaderComponent],
    imports: [ CommonModule,RouterModule,FormsModule,ReactiveFormsModule ],
    exports: [
        HeaderComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class AppSharedModule {}