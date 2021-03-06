import { Component, Input, Output, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {EmitterService} from "../../../services/emitter.service";

@Component({
  selector: 'comment-box',
  templateUrl: 'comment-box.component.html',
  styleUrls: ['comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  //定义输入输出属性
  @Input() comment: Comment;
  @Input() listId: string;
  @Input() editId: string;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  editComment(){
    EmitterService.get(this.editId).emit(this.comment);
  }
  deleteComment(id: string){
    this.commentService.removeComment(id)
      .subscribe(comments=>{
        EmitterService.get(this.listId).emit(comments);
      },
        err => console.log(err)
      )
  }

}
