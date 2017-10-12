import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TweetService } from '../services/tweet.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  tweetDetail: any = {};
  tweet_id: string;
  isLoading = true;
  route_params: any = {};

  constructor(private tweetService: TweetService,
              private http: Http,
              private route: ActivatedRoute,
              private router: Router
            ) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      if (params['tweet_id'] !== undefined) {        
        this.tweet_id = params['tweet_id'];
        this.getTweet();
      } 
    });

  }

  getTweet() {    
    this.tweetService.getTweet(this.tweet_id).subscribe(
      data => this.tweetDetail = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
