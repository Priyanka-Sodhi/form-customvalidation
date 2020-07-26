import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-customvalidations',
  templateUrl: './customvalidations.component.html',
  styleUrls: ['./customvalidations.component.css']
})
export class CustomvalidationsComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  get username(){
    return this.customForm.get('username')
  }

  

  ngOnInit() {
  }

customForm=this.builder.group({
  username:["",Validators.required],

})

}