const CRUD = require('../controllers/picture.js');
const fetch = require('../controllers/fetch.js');

const router = (app) => {
  app.post('/api/create', CRUD.create);
  app.get('api/display', CRUD.display);
  app.put('api/update', CRUD.update);
  app.delete('api/delete', CRUD.delete);
  app.get('/api/data', fetch);
}
module.exports = router;
