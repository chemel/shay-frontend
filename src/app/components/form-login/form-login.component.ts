import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { CommonModule } from '@angular/common';
import { UserService } from '@app/services/user.service';
import { LoginResponse } from '@app/interfaces/login-response.interface';
import { ErrorResponse } from '@app/interfaces/login-error-response.interface';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormLoginComponent implements OnInit {

  public form: FormGroup;
  public loading: boolean = false;
  public errorMessage?: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if(user.isAuthenticated()) {
        this.router.navigate(['reader']);
      }
    });
  }

  public onSubmit() {
    if(this.form.valid) {
      this.errorMessage = undefined;
      this.loading = true;

      const username = this.form.get('username')?.value;
      const password = this.form.get('password')?.value;

      this.authService.login(username, password).subscribe({
        next: (data: LoginResponse) => {
          if(data.token && data.token.length > 0) {
            // Saving JWT token
            this.authService.setJwt(data.token);

            // Getting user from backend
            this.userService.getCurrentUser().subscribe((user) => {
              this.authService.user.next(user);
            });

            // Redirect to the reader
            this.router.navigate(['reader']);
          }
          else {
            this.errorMessage = 'Unexpected error';
          }
          this.loading = false;
        },
        error: (data: ErrorResponse) => {
          if(data.status && data.status == 401 && data.message) {
            this.errorMessage = data.statusText;
          }
          else {
            this.errorMessage = 'Unexpected error';
          }
          this.loading = false;
        }
      });
    }
  }
}
