import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import Search from '../models/search';

const should = chai.use(chaiHttp).should();

describe('Search', () => {

  beforeEach(done => {
    Search.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for users', () => {

    it('should get', done => {
      chai.request(app)
        .get('/api/search')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

  });

});


