import * as express from 'express';

import SearchCtrl from './controllers/search';
import TweetCtrl from './controllers/tweet';
import Search from './models/search';
import Tweet from './models/tweet';

export default function setRoutes(app) {

  const router = express.Router();

  const searchCtrl = new SearchCtrl();
  const tweetCtrl = new TweetCtrl();

  router.route('/search/:term').get(searchCtrl.searchTweets);
  router.route('/tweet/:id').get(tweetCtrl.getTweet);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
