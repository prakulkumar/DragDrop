import { CommonService } from './../services/common.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  public articleArray;
  public loading = true;
  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getNewsFeed().subscribe((response) => {
      try {
        console.log(response);
        if (response['status'] === 'ok') {
          this.articleArray = response['articles'];
          this.articleArray.length = 10;
          this.loading = false;
        } else {
          throw new Error('Response not found');
        }
      } catch (error) {
        console.log('error', error);
      }
    });
  }

  public openTab(news) {
    window.open(news.url, '_blank');
  }
}
