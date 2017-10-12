import Search from '../models/search';
import BaseCtrl from './base';
import * as Twitter from "twitter";
import appsettings from '../config/twitter';

export default class SearchCtrl extends BaseCtrl {
  twitter: Twitter;
  model = Search;

  searchTweets = (req, res) => {

    let client = new Twitter({
      consumer_key: appsettings.consumerkey,
      consumer_secret: appsettings.consumersecret,
      access_token_key: appsettings.accesstoken,
      access_token_secret: appsettings.accesssecret
    });

    client.get('search/tweets', {q: req.params.term}, function(error, tweets, response) {
      if (!error) {
        res.status(200).json({ "status" : "success", "data" : tweets.statuses});
      }else{
        res.status(204).json({'status': "error", "message" : "No result for search string"});
      }
    });
  }

}
