import { FormControl } from '@angular/forms';

const forbiddenTitle = ['post']

export default function forbiddenTitleValidator(control: FormControl) {
    if(forbiddenTitle.includes(control.value)) return { 'ifForbiddenTitle': true}
    return null
}