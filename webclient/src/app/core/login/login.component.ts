import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {loginMessages} from "./login.constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm = this.fb.group({
    username: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: Validators.required})
  })
  incorrectCredentials = false;

  readonly messages = loginMessages;
  constructor(
    private fb: FormBuilder,
    private router: Router,
) { }

  ngOnInit(): void {
    this.loginForm.get('username')?.markAsDirty();
    this.loginForm.get('password')?.markAsDirty();
  }

  onSubmit(): void{
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (username === '') {
      this.loginForm.get('username')?.markAsPristine();
    }
    if (password === '') {
      this.loginForm.get('password')?.markAsPristine();
    }
    () => {
      this.incorrectCredentials = true;
      this.loginForm.controls['username'].setValue('');
      this.loginForm.controls['password'].setValue('');
    }
  }

}
