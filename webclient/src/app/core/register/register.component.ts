import {Component} from '@angular/core';

import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserRole} from "../enums/user-role";
import {registerMessages} from "./register.constants";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {ERole} from "../model/user";


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
    private authService: AuthService
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
    if (username !== '' && password !== '' && role !== ''){
      const roleEnum: ERole = ERole[role as keyof typeof ERole];
      this.authService.register(username!,password!,roleEnum!).subscribe({
        next: data =>{
          this.router
            .navigateByUrl('/login')
            .then(() => (this.authService.redirectUrl = undefined));
        }
      })
    }

    () => {
      this.incorrectCredentials = true;
      this.registerForm.controls['username'].setValue('');
      this.registerForm.controls['password'].setValue('');
    }
  }

}
