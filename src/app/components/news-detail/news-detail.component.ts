import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {News, Review, NewsService} from "../../services/news.service";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news: News;
  reviews: Review[];
  constructor(route: ActivatedRoute, newsService: NewsService) {
    let newsId: number = parseInt(route.snapshot.params['newsId']);
    this.news = newsService.getNewsById(newsId);

    this.reviews = newsService.getNewsReview(this.news.id);
  }

  ngOnInit() {
    console.log(this.reviews);
  }

}
