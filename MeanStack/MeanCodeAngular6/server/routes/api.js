const express = require('express');
const router = express.Router();


const mongoose = require('mongoose');
const Video = require('../models/video');
const db = 'mongodb://roja:roja123@ds119091.mlab.com:19091/videoplayer';
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
  console.log(db);
  if(err) {
    console.log("Error ! " + err);
  }
});

// router.get('/', function(req, res){
//   res.send('api works');
// })

router.get('/videos', function(req, res){
 console.log('Get request for all videos');
 Video.find({})
 .exec(function(err, videos) {
   if(err) {
    console.log("Error  Retrieving videos " + err);
   }else{
    res.json(videos);
   }
 });
});

router.get('/video/:id', function(req, res){
  console.log('Get request for a single video');
  Video.findById(req.params.id)
  .exec(function(err, video) {
    if(err) {
     console.log("Error  Retrieving video " + err);
    }else{
     res.json(video);
    }
  });
 });

 router.post('/video', function(req, res){
  console.log('Post video');
  var newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;

  newVideo.save(function(err, insertedVideo) {
    if(err) {
     console.log("Error saveving video " + err);
    }else{
     res.json(insertedVideo);
    }
  });
 });

 router.put('/video/:id', function(req, res) {
  console.log('Update video');

  Video.findByIdAndUpdate(req.params.id,
  {
    $set: { title: req.body.title, url: req.body.url, description: req.body.description}
  },
  {
    new: true
  },
    function (err, updateVideo) {
      if(err) {
        res.send("Error updating video");
      }else{
        res.json(updateVideo);
      }
    }
  );
 });

 router.delete('/video/:id', function(req, res) {
  console.log('Deleted video');
  Video.findByIdAndRemove(req.params.id, function (err, deletedVideo) {
    if(err) {
      res.send("Error Deleted  video");
    }else{
      res.json(deletedVideo);
    }
  });
 });

module.exports = router;
