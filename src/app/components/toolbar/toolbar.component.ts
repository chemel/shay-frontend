import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';
import { User } from '@app/models/user.model';
import { AuthService } from '@app/services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: [NgIf, MenuModule, ButtonModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public isUserAuthenticated: boolean = false;

  public items: MenuItem[] = [
    {
      label: 'Manage feeds',
      icon: 'pi pi-list',
      routerLink: '/admin/feeds'
    },
    {
      label: 'Manage categories',
      icon: 'pi pi-tags',
      routerLink: '/admin/categories'
    },
    {
      separator: true
    },
    {
      label: 'Import / Export',
      icon: 'pi pi-upload',
      routerLink: '/admin/import-export'
    },
    {
      separator: true
    },
    {
      label: 'Logout',
      icon: 'pi pi-sign-out',
      routerLink: '/logout'
    }
  ];

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isUserAuthenticated = user.isAuthenticated();
    });
  }
}
