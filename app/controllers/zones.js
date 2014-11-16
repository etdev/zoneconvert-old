import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInput: function(){
      var locationLocal = this.get('locationLocal');
      var locationRemote = this.get('locationRemote');
      var topAlertBox  = document.getElementById("sandbox");
      var targetTime = this.get('locationTarget');

      //Fetch local info
      var localTime = getTime(locationLocal);
      var remoteTime = getTime(locationRemote);
      var diffDays = getDayDiff(localTime, remoteTime);

      function getTime(location){
        //Fetch remote info
        Ember.$.ajax({
          type: "GET",
          url: "http://api.zoneconvert.com?location=" + location,
          success: function(json) {
            console.log(json);
            var result = JSON.parse(json).time;
          },
          error: function(e) {  console.log(e.message);
          }
        });
      }

      function getDayDiff(localTime, remoteTime){
        localTime = new Date(localTime);
        remoteTime = new Date(remoteTime);
        var diff = localTime.getTime() - remoteTime.getTime();
        var diffDays = Math.ceil(diff / (1000*3600*24));
        return diffDays;
      }

      function getHourDiff(localTime, remoteTime){
        localTime = new Date(localTime);
        remoteTime = new Date(remoteTime);
        var diff = localTime.getTime() - remoteTime.getTime();
        var diffHours = Math.ceil(diff / (1000*3600))%24;
        return diffHours;
      }

      function getHourDiff(localTime, remoteTime){
        localTime = new Date(localTime);
        remoteTime = new Date(remoteTime);
        var diff = localTime.getTime() - remoteTime.getTime();
        var diffHours = Math.ceil(diff / (1000*60))%60;
        return diffHours;
      }
    }
  }
});

export default ZonesController;
