import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutNewsreaderComponent } from './components/layout-newsreader/layout-newsreader.component';
import { NewFeedComponent } from './components/new-feed/new-feed.component';

const routes: Routes = [
  { path: '',   redirectTo: '/reader', pathMatch: 'full' },
  { path: 'reader', component: LayoutNewsreaderComponent },
  { path: 'new-feed', component: NewFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
