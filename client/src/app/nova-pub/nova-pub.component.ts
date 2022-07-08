import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

import { HeaderService } from '../components/template/header/header.service';
import { NovaPubService } from './nova-pub.service';
import forbiddenTitleValidator from './validators/forbiddenTitleValidator';
import forbiddenValidator from './validators/forbiddenValidator';

@Component({
  selector: 'app-nova-pub',
  templateUrl: './nova-pub.component.html',
  styleUrls: ['./nova-pub.component.css']
})
export class NovaPubComponent implements OnInit {
  aoba: string = 'asdn'
  constructor(private headerService: HeaderService, 
              private pubService: NovaPubService, 
              private formBuilder: FormBuilder
              ) { }

  formControl = this.formBuilder.group({
    title: ['', Validators.required, Validators.maxLength(30), forbiddenTitleValidator.bind(this)],
    author: ['', Validators.required, Validators.maxLength(30), forbiddenValidator.bind(this)],
    shortDescription: ['', Validators.compose([Validators.maxLength(200), Validators.required])],
    content: ['', Validators.required],
    image: ['https://res.cloudinary.com/dibnenfot/image/upload/v1655476136/Group_1_hupvqa.png'],
    myTest: this.formBuilder.array([])
  })

  ngOnInit(): void {
    this.headerService.updatePageName("Comece uma nova publicação!")
  }

  handleSumbitCreatePub():void {
    this.pubService.createPub(this.formControl.value).subscribe({
      next: () => (<FormArray>this.formControl.get('myTest')).push(new FormControl('null', [Validators.required])),
      error: () => console.log('error')
    })
  }

}
