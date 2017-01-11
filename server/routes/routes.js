const picture = require('../controllers/picture.js');

const router = (app) => {
  app.post('/api/create', picture.create);
  app.get('api/display', picture.display);
  app.put('api/update', picture.update);
  app.delete('api/delete', picture.delete);
}
module.exports = router;
