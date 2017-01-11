const request = require('superagent');
const Pictures = require('../models/picture.js');

const CRUD = (req, res) => {
  const Create = (req, res) => {
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
  const Display = (req, res) => {
    Pictures.findAll(err, picture) => {
      if(err){
        return res.status(500);
      }
      res.status(200).json(picture);
    }

  }
  const Update = (req, res) => {
    Pictures.findById(req.params.id,(err, picture) => {
      if(picture === undefined){
        return res.status(404).json('document doesn\'t exist');
      }
      picture.albumId = req.body.albumId;
      picture.id = req.body.Id;
      picture.title = req.body.title;
      picture.thumbnailUrl = req.body.thumbnailUrl;
      picture.url = req.body.url;

      picture.save((err) => {
        if(err){
          res.status(500);
        }
        else {
          res.status(200).json({
            'message': 'Successfully updated',
          });
        }
      });
    });
  }
  const Delete = (req, res) => {
    Pictures.findById(req.params.id, (err, picture) => {
      if(err){
        return res.status(500);
      }
      if(picture === undefined) {
        return res.status(404).json({ 'message': 'that picture does not exist'});
      }
      Pictures.delete((err) => {
        if(err) {
          return res.status(401);
        }
        res.status(200).json({ 'message': 'Delete successful'});
      });
    });
  }
}
