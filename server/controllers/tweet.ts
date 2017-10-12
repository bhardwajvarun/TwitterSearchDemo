

import Tweet from '../models/tweet';
import BaseCtrl from './base';
import * as Twitter from "twitter";
import appsettings from '../config/twitter';


export default class TweetCtrl extends BaseCtrl {
  twitter: Twitter;
  model = Tweet;

  getTweet = (req, res) => {
    
        let client = new Twitter({
          consumer_key: appsettings.consumerkey,
          consumer_secret: appsettings.consumersecret,
          access_token_key: appsettings.accesstoken,
          access_token_secret: appsettings.accesssecret
        });
    
        client.get('statuses/show', {id: req.params.id}, function(error, tweet, response) {          
          if (!error) {
            res.status(200).json({ "status" : "success", "data" : tweet});
          }else{
            res.status(404).json({'status': "error", "message" : "No Such tweet Found"});
          }
        });
      }

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        //const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        //res.status(200).json({ token: token });
      });
    });
  }

}
