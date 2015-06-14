module.exports = function(app, url_for) {
  app.get('/post-blog', function (req, res) {
    res.render('make-post.swig', {url_for: url_for});
  });
}