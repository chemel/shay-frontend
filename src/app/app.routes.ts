import { Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LayoutNewsreaderComponent } from './components/reader/layout-newsreader/layout-newsreader.component';
import { NewFeedComponent } from './components/new-feed/new-feed.component';
import { FeedsListComponent } from './components/admin/feeds-list/feeds-list.component';
import { CategoriesListComponent } from './components/admin/categories-list/categories-list.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
    { path: 'login', component: FormLoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'reader', component: LayoutNewsreaderComponent },
    { path: 'new-feed', component: NewFeedComponent },
    { path: 'admin/feeds', component: FeedsListComponent },
    { path: 'admin/categories', component: CategoriesListComponent },
];
