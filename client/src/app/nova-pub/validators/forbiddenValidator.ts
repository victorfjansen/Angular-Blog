import { FormControl } from '@angular/forms';

const forbiddenName = ['Victor']

export default function forbiddenValidator (control: FormControl) {
    if(forbiddenName.includes(control.value)) return { 'isForbiddenName': true}
    return null
}