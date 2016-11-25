import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'comment-box',
  templateUrl: 'comment-box.component.html',
  styleUrls: ['comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  //定义输入输出属性
  @Input() comment: Comment;
  constructor() { }

  ngOnInit() {
  }

}
