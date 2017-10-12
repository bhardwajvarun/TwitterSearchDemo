import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
    tweetString:string;
    tweetList = [];
    isLoading = true;
    isSearch = false;
    
  
    constructor(private searchService: SearchService,
                private http: Http) { }
  
    ngOnInit() {
    }
  
    getSearchitem($e) {
      this.isLoading = false;
      this.isSearch = true;
      this.tweetString = $e.target.value;
      this.searchService.getSearchTweets(this.tweetString).subscribe(
        data => this.tweetList = data,
        error => console.log(error),
        () => this.isSearch = false
      ); 
      
    }
  }
