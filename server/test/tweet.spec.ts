import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import Tweet from '../models/tweet';

const should = chai.use(chaiHttp).should();

describe('Tweet', () => {

  beforeEach(done => {
    Tweet.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for cats', () => {


  });

});


