import { Routes } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LayoutNewsreaderComponent } from './components/layout-newsreader/layout-newsreader.component';
import { NewFeedComponent } from './components/new-feed/new-feed.component';

export const routes: Routes = [
    { path: 'login', component: FormLoginComponent },
    { path: '',   redirectTo: '/reader', pathMatch: 'full' },
    { path: 'reader', component: LayoutNewsreaderComponent },
    { path: 'new-feed', component: NewFeedComponent },
];
