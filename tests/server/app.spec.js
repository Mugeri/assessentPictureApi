const app = require('../server/main.js');
const expect = require('chai').expect;
const request = require( 'supertest')(app);

//check if it fetches from the url
//check if it reads data from the db
//check if it can update data to the db
//check if it delete data
//check if one can create.
const dummyDoc = {
  'albumId': 121,
  'Id': 45,
  'title': 'random title',
  'url': 'https://randomurl',
  'thumbnailUrl': 'https://randomurl/thumbnail'
  }
describe('Create', ()=> {
  it('should not be able to create a blank document', (done)=>{
    request
    .post('/api/create')
    .send({})
    .end((err, res) => {
      expect(res.status).to.be.equal(500);
      expect(res.body).to.be.equal('Cannot create a blank document');
    });
    done();
  });
  it('should create documents with all the details', (done)=> {
    request
    .post('/api/create')
    .send(dummyDoc)
    .end((err, res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).to.equal(dummyDoc);
    });
    done();
  });
});
describe('Read', () => {
  it('should display all documents when called', () => {
    request
    .get('/api/display')
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
    });
    done();
  });
})
