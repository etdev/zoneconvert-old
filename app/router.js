import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ZonesENV.locationType
});

Router.map(function() {
  this.resource('zones', {path: '/'});
});

export default Router;
