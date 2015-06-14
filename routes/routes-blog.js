module.exports = function(app, db, url_for) {
  app.get('/blog/:name', function (req, res) {
    console.log(req.params.name);
    db.blog.find({
      'title': req.params.name
    }, function (err, docs) {
      console.log("Started response");
      if (err) {console.error(err);}
      console.log(docs);
      if (!docs[0]) {
        res.send('Liar');
      } else {
        post = docs[0];
        res.render('blog-post.swig', {
          title: post.title,
          content: post.content,
          url_for: url_for
        });
      }
    });
  }); //Get a blog

  app.post('/blog', function(req, res) {
    db.blog.insert({
      title: req.body.title,
      content: req.body.content
    }, function(err, data) {
      if (err) {console.error(err);}
      else {
        res.send(data);
      }
    });
  }); //Post a blog
};