import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {loginMessages} from "./login.constants";
import {AuthService} from "../services/auth.service";
import {TokenStorageService} from "../services/token-storage.service";

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
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
) { }

  ngOnInit(): void {
    this.loginForm.get('username')?.markAsDirty();
    this.loginForm.get('password')?.markAsDirty();
  }

  onSubmit(): void{
    localStorage.removeItem('token');
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (username === '') {
      this.loginForm.get('username')?.markAsPristine();
    }
    if (password === '') {
      this.loginForm.get('password')?.markAsPristine();
    }
    if (username !== '' && password !== '') {
      this.authService.login(username!, password!).subscribe(
        (resp) => {
          localStorage.setItem('token', resp.body.token);
          this.authService.sendMessage(resp.body.role);
          this.router
            .navigateByUrl(this.authService.redirectUrl ?? '/table')
            .then(() => (this.authService.redirectUrl = undefined));
        },
        () => {
          this.incorrectCredentials = true;
          this.loginForm.controls['password'].setValue('');
        }
      );
    }
    () => {
      this.incorrectCredentials = true;
      this.loginForm.controls['username'].setValue('');
      this.loginForm.controls['password'].setValue('');
    }
  }

}
