module.exports = function(app, db) {
  app.get('/api/blog/:name', function (req, res) {
    console.log(req.params.name);
    db.blog.find({
      'title': req.params.name
    }, function (err, docs) {
      if (err) {console.error(err);}
      console.log(docs);
      if (!docs[0]) {
        res.send('Liar');
      } else {
        res.send(docs[0]);
      }
    });
  }); //Return blog json
  
  app.get('/api/blog', function (req, res) {
    db.blog.find(function (err, docs) {
      if (err) {console.error(err);}
      console.log(docs);
      if (!docs[0]) {
        res.send('No blogs found');
      } else {
        res.send(docs);
      }
    });
  }); //Return blog json
};