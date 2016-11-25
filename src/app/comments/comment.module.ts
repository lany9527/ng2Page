import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JsonpModule, HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {CommentListComponent} from "./components/comment-list/comment-list.component";
import {CommentFormComponent} from "./components/comment-form/comment-form.component";
import {CommentBoxComponent} from "./components/comment-box/comment-box.component";
import {CommentService} from "./services/comment.service";
import {CommentComponent} from "./components/index/index.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [
    CommentListComponent,
    CommentFormComponent,
    CommentBoxComponent,
    CommentComponent,
  ],
  exports: [
    CommentListComponent,
    CommentFormComponent,
    CommentBoxComponent,
    CommentComponent,
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
