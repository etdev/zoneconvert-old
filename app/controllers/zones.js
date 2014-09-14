import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInputAddress: function(){
      var locationLocal = this.get('locationLocal');
      console.log("The input address is: " + locationLocal);
    }
  }
});

export default ZonesController;
