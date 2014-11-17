import Ember from 'ember';

var Router = Ember.Router.extend({
});

Router.map(function() {
  this.resource('zones', {path: '/'});
  this.resource('about', {path: '/about'});
});

export default Router;
