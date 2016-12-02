import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//component
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import {CommentModule} from "./comments/comment.module";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { UserCenterComponent } from './pages/user-center/user-center.component';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {AppRoutingModule} from "./app-routing.module";
import {UserService} from "./services/user.service";

//service
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    UserCenterComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommentModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
