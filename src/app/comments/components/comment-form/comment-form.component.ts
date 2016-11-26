import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { NgForm }    from '@angular/forms';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../model/comment"
import {Observable} from "rxjs";
import {EmitterService} from "../../../services/emitter.service";
@Component({
  selector: 'comment-form',
  templateUrl: 'comment-form.component.html',
  styleUrls: ['comment-form.component.css'],
  providers: [CommentService]
})
export class CommentFormComponent implements OnChanges {
  constructor(private commentService: CommentService) {}
  private editing = false;
  private model = new Comment(new Date(), '', '');

  @Input() editId: string;
  @Input() listId: string;

  submitComment(){
    let commentOperation:Observable<Comment[]>;

    if(!this.editing){
      // Create a new comment
      commentOperation = this.commentService.addComment(this.model)
    } else {
      // Update an existing comment
      commentOperation = this.commentService.updateComment(this.model)
    }

    // Subscribe to observable
    commentOperation.subscribe(
      comments => {
        // Emit list event
        EmitterService.get(this.listId).emit(comments);
        // Empty model
        this.model = new Comment(new Date(), '', '');
        // Switch editing status
        if(this.editing) this.editing = !this.editing;
      },
      err => {
        // Log errors if any
        console.log(err);
      });
  }
  ngOnChanges() {
    console.log("update or add");
    EmitterService.get(this.editId).subscribe((comment: Comment) => {
      this.model = comment;
      this.editing = true;
    })
  }

}
