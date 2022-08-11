import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public form: FormGroup;
  public errorMessage?: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  public onSubmit() {
    if(this.form.valid) {
      this.errorMessage = undefined;

      const username = this.form.value.username;
      const password = this.form.value.password;

      this.authService.login(username, password).subscribe({
        next: (data) => {
          if(data.token) {
            this.authService.jwtToken.next(data.token); // TODO Remove ?
            localStorage.setItem('jwtToken', data.token);
            this.router.navigate(['reader']);
          }
          else {
            this.errorMessage = 'Unexpected error';
          }
        },
        error: (data) => {
          if(data.error.code && data.error.code == 401 && data.error.message) {
            this.errorMessage = data.error.message;
          }
          else {
            this.errorMessage = 'Unexpected error';
          }
        }
      });
    }
  }
}
