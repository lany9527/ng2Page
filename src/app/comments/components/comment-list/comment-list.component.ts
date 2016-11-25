import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../model/comment"
import {EmitterService} from "../../../services/emitter.service";
@Component({
  selector: 'comment-list',
  templateUrl: 'comment-list.component.html',
  styleUrls: ['comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnChanges {
  //定义输入属性
  @Input() editId: string;
  @Input() listId: string;
  //定义变量
  comments: Comment[];
  constructor(private commentService: CommentService) { }
  //加载评论
  loadComments(){
    this.commentService.getComments()
      .subscribe(
        (comments) => {
          this.comments = comments;
          console.log(this.comments);
        },
            err => console.log(err),

      );
  }
  ngOnInit() {
    this.loadComments()
  }
  ngOnChanges(changes: any){
    EmitterService.get(this.listId).subscribe((comments: Comment[]) => {
      this.comments = comments;
      // this.loadComments();
    });
  }
}
