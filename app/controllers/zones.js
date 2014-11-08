import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInput: function(){
      var locationLocal = this.get('locationLocal');
      var locationRemote = this.get('locationRemote');
      var topAlertBox  = document.getElementById("sandbox");
      Ember.$.ajax({
        type: "GET",
        url: "http://api.zn.ericturnerdev.com?location=" + locationLocal,
        success: function(json) {
          console.log(json);
          var resultLocal = JSON.parse(json).time;
          /*
          topAlertBox.innerHTML = result;
          */
        },
        error: function(e) { topAlertBox.innerHTML = "Please enter a valid location.";
                             console.log(e.message);
        }
      });
      Ember.$.ajax({
        type: "GET",
        url: "http://api.zn.ericturnerdev.com?location=" + locationRemote,
        success: function(json) {
          console.log(json);
          var resultRemote = JSON.parse(json).time;
          /*
          topAlertBox.innerHTML = result;
          */
        },
        error: function(e) { topAlertBox.innerHTML = "Please enter a valid location.";
                             console.log(e.message);
        }
      });

      var sLocal = resultLocal.split(/[-: ]/);
      var dLocal = new Date(s[0], s[1]-1, s[2], s[3], s[4], s[5]);

      var sRemote = resultRemote.split(/[-: ]/);
      var dRemote = new Date(s[0], s[1]-1, s[2], s[3], s[4], s[5]);

      var sEvent = resultEvent.split(/[-: ]/);
      var dEvent = new Date(s[0], s[1]-1, s[2], s[3], s[4], s[5]);

      var secDiff = dRemote - dLocal;
      //
    }
  }
});

export default ZonesController;
