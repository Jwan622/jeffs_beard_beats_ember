import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('artists', function() {
    this.resource("artist", { path: ":artist_id" }, function() {
      // here we are overridng the url with the path id... that's why the url reads /artists/1 This artist id shows up in the params
      this.resource('albums', function() {
        this.resource('album', { path: ":album_id" })
      });
    });
  });
});
