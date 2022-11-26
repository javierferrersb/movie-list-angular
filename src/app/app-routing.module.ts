import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailScreenComponent } from './detail-screen/detail-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeScreenComponent,
  },
  {
    path: 'movie/:id',
    component: DetailScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
