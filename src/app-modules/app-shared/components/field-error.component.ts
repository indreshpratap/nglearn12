import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'field-error',
    templateUrl: './field-error.component.html'
})
export class FieldErrorComponent {
    @Input() control: FormControl;
    @Input() messages:any;

}
