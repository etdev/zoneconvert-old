import Ember from 'ember';

App.Person = Ember.Object.extend({
  say: function(thing) {
    var name = this.get('name');
    alert(name + " say: " + thing);
  }
});

