import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInputAddress: function(){
      var locationLocal = this.get('locationLocal');
      var topAlertBox  = document.getElementById("sandbox");
      topAlertBox.innerHTML = locationLocal;
      console.log("User inputted address: " + locationLocal);
    }
  }
});

export default ZonesController;
