import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../model/comment"
import {Observable} from "rxjs";
import {EmitterService} from "../../../services/emitter.service";
@Component({
  selector: 'comment-form',
  templateUrl: 'comment-form.component.html',
  styleUrls: ['comment-form.component.css']
})
export class CommentFormComponent implements OnChanges {
  private editing = false;
  private model = new Comment(new Date, '', '');

  @Input() editId: string;
  @Input() listId: string;
  constructor(private commentService: CommentService) { }

  submitComment(){
    let commentOption: Observable<Comment[]>;
    if(!this.editing){
      commentOption = this.commentService.addComment(this.model);
    }else {
      commentOption = this.commentService.updateComment(this.model);
    }
    commentOption.subscribe(
      comments => {
        EmitterService.get(this.listId).emit(comments);
        this.model = new Comment(new Date(), '', '');
        if (this.editing) this.editing = !this.editing;
      },
      err => console.log(err)
    );
  }
  ngOnChanges() {
    console.log("out");
    EmitterService.get(this.editId).subscribe((comment: Comment) => {
      this.model = comment;
      this.editing = true;
    })
  }

}
