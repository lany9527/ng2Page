import {Component, OnInit, Input} from '@angular/core';
import {News} from '../../services/news.service'
@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: News;

  constructor() {
  }

  ngOnInit() {
  }

}
