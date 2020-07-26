import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-customvalidations',
  templateUrl: './customvalidations.component.html',
  styleUrls: ['./customvalidations.component.css']
})
export class CustomvalidationsComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  get name() {
    return this.customForm.get('name');
  }
  get phone() {
    return this.customForm.get('phone');
  }
  get email() {
    return this.customForm.get('email');
  }
  get password() {
    return this.customForm.get('password');
  }
  get confirmPassword() {
    return this.customForm.get('confirmPass');
  }
  get pan() {
    return this.customForm.get('pan');
  }

  ngOnInit() {
  }

customForm=this.builder.group({
  username:["",Validators.required],


})

}