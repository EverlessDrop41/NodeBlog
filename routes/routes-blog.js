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

  app.get('/blog', function (req, res) {
    db.blog.find(function (err, docs) {
      if (err) {console.error(err);}
      console.log(docs);
      if (!docs[0]) {
        res.render('text-page.swig', {
          url_for: url_for, 
          text: 'No blogs found'
        });
      } else {
        res.render('blog-list.swig',{
          url_for: url_for,
          blogs: docs
        });
      }
    });
  }); //Return list of blogs

  app.post('/blog', function(req, res) {
    db.blog.insert({
      title: req.body.title,
      content: req.body.content
    }, function(err, data) {
      if (err) {console.error(err);}
      else {
        res.redirect(url_for('blog/' + req.body.title));
      }
    });
  }); //Post a blog
};