import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInputAddress: function(){
      var locationLocal = this.get('locationLocal');
      var fieldNameElement = document.getElementById("sandbox");
      fieldNameElement.innerHTML = locationLocal;
      console.log("User inputted address: " + locationLocal);
    }
  }
});

export default ZonesController;
