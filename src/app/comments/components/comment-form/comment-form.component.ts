import {Component, OnInit, Input} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../model/comment"
@Component({
  selector: 'comment-form',
  templateUrl: 'comment-form.component.html',
  styleUrls: ['comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  private editing = false;
  private model = new Comment(new Date, '', '');

  @Input() editId: string;
  @Input() listId: string;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

}
