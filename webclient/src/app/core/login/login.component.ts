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
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required]})
  })
  incorrectCredentials = false;

  readonly messages = loginMessages;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.loginForm.get('username')?.markAsDirty();
    this.loginForm.get('password')?.markAsDirty();
  }


  onSubmit(): void {
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
          // this.tokenStorageService.saveUser(resp);
          this.tokenStorageService.saveToken(resp.body.token);
          this.tokenStorageService.saveUser({
            id: resp.body.id,
            username: resp.body.username,
            roles: resp.body.roles
          });
          localStorage.setItem('token', resp.body.token);
          this.authService.sendMessage(resp.body.role);
          this.router
            .navigateByUrl('/main')
            .then(() => (this.authService.redirectUrl = undefined));
          console.log(resp.body.token);
          console.log(resp.body.id);
          console.log(resp.body.roles);
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

  redirectToSignUp() {
    this.router.navigate(['register']);
  }
}
