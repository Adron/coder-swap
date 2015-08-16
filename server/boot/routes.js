/**
 * Created by adron on 8/10/15.
 * Description: API routes.
 */

module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
}