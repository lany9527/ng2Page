import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";

import './rxjs-extensions';

//component
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { UserCenterComponent } from './pages/user-center/user-center.component';
import {UsersComponent} from "./components/users/users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import { UserSearchComponent } from './components/user-search/user-search.component';

//service
import {UserService} from "./services/user.service";
//module
import {AppRoutingModule} from "./app-routing.module";
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
    UserSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
