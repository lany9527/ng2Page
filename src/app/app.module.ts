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
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';

//service
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    UserComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommentModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
