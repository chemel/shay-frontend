import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '@app/models/user.model';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  protected isUserLogged: boolean = false;

  constructor(
    private authService: AuthService
  ) {
    this.authService.user.subscribe(user => {
      this.isUserLogged = user instanceof User;
    });
  }

  ngOnInit(): void {
  }

}
