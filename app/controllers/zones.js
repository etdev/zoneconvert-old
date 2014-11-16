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
      console.log("localTime: " + localTime + "\n");
      var remoteTime = getTime(locationRemote);
      console.log("remoteTime: " + remoteTime + "\n");
      var diffDays = getDayDiff(localTime, remoteTime);
      console.log("diffDays: " + diffDays + "\n");
      var diffHours = getHourDiff(localTime, remoteTime);
      console.log("diffHours: " + diffHours + "\n");
      var diffMins = getMinuteDiff(localTime, remoteTime);
      console.log("diffMins: " + diffMins + "\n");


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

      function getDiff(localTime, remoteTime){
        localTime = new Date(localTime);
        remoteTime = new Date(remoteTime);
        var diff = localTime.getTime() - remoteTime.getTime();
        return diff;
      }

      function getDayDiff(localTime, remoteTime){
        var diff = getDiff(localTime, remoteTime);
        var diffDays = Math.ceil(diff / (1000*3600*24));
        return diffDays;
      }

      function getHourDiff(localTime, remoteTime){
        var diff = getDiff(localTime, remoteTime);
        var diffDays = getDayDiff(localTime, remoteTime);
        var diffHours = Math.ceil(diff / (1000*3600))-(24*Math.abs(diffDays));
        return diffHours;
      }

      function getMinuteDiff(localTime, remoteTime){
        var diff = getDiff(localTime, remoteTime);
        var diffHours = getHourDiff(localTime, remoteTime);
        var diffMins = Math.ceil(diff / (1000*60))-(60*Math.abs(diffHours));
        return diffMins;
      }

      function addDays(date, numDays) {
        var result = new Date(date);
        result.setDate(date.getDate() + numDays);
        return result;
      }

      function normalizeTime(time){

      }
    }
  }
});

export default ZonesController;
