import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/models/user.model';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    // Clearing local storage
    localStorage.clear();

    // Clearing user
    this.authService.user.next(new User());

    // Redirecting to login
    this.router.navigate(['/login']);
  }
}
