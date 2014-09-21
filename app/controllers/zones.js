import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInputAddress: function(){
      var locationLocal = this.get('locationLocal');
      var topAlertBox  = document.getElementById("sandbox");
      //var locations = this.store.all('zone');
      topAlertBox.innerHTML = locationLocal;
      //console.log("User inputted address: " + locationLocal);
    }
  }
});

export default ZonesController;
