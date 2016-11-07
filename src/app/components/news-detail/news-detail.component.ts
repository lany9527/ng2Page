import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {News, Review, NewsService} from "../../services/news.service";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  news: News;
  reviews: Review[];

  isReviewHidden: boolean = true;
  newRating: number;
  newComment: string;

  constructor(route: ActivatedRoute, newsService: NewsService) {
    let newsId: number = parseInt(route.snapshot.params['newsId']);
    this.news = newsService.getNewsById(newsId);

    this.reviews = newsService.getNewsReview(this.news.id);
  }

  addReview(){
    let review = new Review(0, this.news.id, new Date(), 'SomeOne', this.newRating, this.newComment);
    this.reviews = [...this.reviews, review];
    this.news.rating = this.averageRating(this.reviews);
  }

  averageRating(reviews: Review[]){
    let sum  = 0;
    forEach(reviews, function (v, k) {
      sum += parseInt(v.rating);
    });
    console.log(sum);
    return sum / reviews.length;

    this.resetForm();
  }
  resetForm(){
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
  ngOnInit() {
    console.log(this.reviews);
  }

}
