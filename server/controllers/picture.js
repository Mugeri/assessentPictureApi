const request = require('superagent');

const Picture = {
  const Create: (req, res) => {
    const albumId = req.body.albumId;
    const id = req.body.Id;
    const title = req.body.title;
    const thumbnailUrl = req.body.thumbnailUrl;
    const url = req.body.url;

    const picture = { albumId, id, title, url, thumbnailUrl }
    picture.save((err) => {
      if(err){
        res.status(500);
      }
      else {
        res.status(200).json({
          'message': 'Successfully created',
        });
      }
    });
  }
  const Display: (req, res) => {
    
  }
}
