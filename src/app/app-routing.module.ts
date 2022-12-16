import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballComponent } from './components/football/football.component';
import { BasketballComponent } from './components/basketball/basketball.component';
import { HandballComponent } from './components/handball/handball.component';
import { VolleyballComponent } from './components/volleyball/volleyball.component';
import { TennisBallComponent } from './components/tennis-ball/tennis-ball.component';

const routes: Routes = [
  {
    path: 'football',
    component: FootballComponent,
  },
  {
    path: 'basketball',
    component: BasketballComponent,
  },
  {
    path: 'handball',
    component: HandballComponent,
  },
  {
    path: 'volleyball',
    component: VolleyballComponent,
  },
  {
    path: 'tennis-ball',
    component: TennisBallComponent,
  },
  { path: '',
   redirectTo: '/football',
    pathMatch: 'full'
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
