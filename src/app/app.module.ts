import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

import { FootballComponent } from './components/football/football.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BasketballComponent } from './components/basketball/basketball.component';
import { HandballComponent } from './components/handball/handball.component';
import { VolleyballComponent } from './components/volleyball/volleyball.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TennisBallComponent } from './components/tennis-ball/tennis-ball.component';


@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    ToolbarComponent,
    BasketballComponent,
    HandballComponent,
    VolleyballComponent,
    LayoutComponent,
    TennisBallComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
