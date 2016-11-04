import {Component, OnInit} from '@angular/core';
import {News, NewsService} from '../../services/news.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: Array<News> = [];

  constructor(private newsService: NewsService) {
    this.newsList = this.newsService.getNews()
  }

  ngOnInit() {
    // console.log(this.newsList)
  }

}
