import {Component} from '@angular/core';

import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserRole} from "../enums/user-role";
import {registerMessages} from "./register.constants";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: Validators.required}),
    role: new FormControl('', {
      validators: [Validators.required, (control) => {
        if (!Object.values(UserRole).includes(control.value)) {
          return {invalidRole: true};
        }
        return null;
      }]
    })
  })
  incorrectCredentials = false;

  readonly messages = registerMessages;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.registerForm.get('username')?.markAsDirty();
    this.registerForm.get('password')?.markAsDirty();
    this.registerForm.get('role')?.markAsDirty();
  }

  onSubmit() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const role = this.registerForm.value.role;

    if (username === '') {
      this.registerForm.get('username')?.markAsPristine();
    }
    if (password === '') {
      this.registerForm.get('password')?.markAsPristine();
    }
    if (role === '') {
      this.registerForm.get('role')?.markAsPristine();
    }
    () => {
      this.incorrectCredentials = true;
      this.registerForm.controls['username'].setValue('');
      this.registerForm.controls['password'].setValue('');
    }
  }

}
