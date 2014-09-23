import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInput: function(){
      var locationLocal = this.get('locationLocal');
      var topAlertBox  = document.getElementById("sandbox");
      Ember.$.ajax({
        type: "GET",
        url: "http://api.zn.ericturnerdev.com?location=" + locationLocal,
        success: function(json) {
          console.log(json);
          var result = JSON.parse(json).time;
          topAlertBox.innerHTML = result;
        },
        error: function(e) { topAlertBox.innerHTML = "Please enter a valid location.";
                             console.log(e.message);
        }
      });
    }
  }
});

export default ZonesController;
