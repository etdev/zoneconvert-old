import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInput: function(){
      var locationLocal = this.get('locationLocal');
      var locationRemote = this.get('locationRemote');
      var topAlertBox  = document.getElementById("sandbox");
      var targetTime = this.get('locationTarget');

      //Fetch local info
      var localDateTime;
      getTime(locationLocal, 'local');
      console.log("localDateTime: " + localDateTime + "\n");
      var remoteDateTime;
      getTime(locationRemote, 'remote');
      console.log("remoteDateTime: " + remoteDateTime + "\n");
      var localDate = extractDate(localDateTime);
      console.log("localDate: " + localDate + "\n");
      var localTime  = extractTime(localDateTime);
      console.log("localTime: " + localTime + "\n");
      var remoteDate = extractDate(remoteDateTime);
      console.log("remoteDate: " + remoteDate + "\n");
      var remoteTime  = extractTime(localDateTime);
      console.log("remoteTime: " + remoteTime + "\n");

      var hourDiff = getHourDiff(localDateTime, remoteDateTime);
      var minDiff = getMinDiff(localDateTime, remoteDateTime);

      //var diff  = getDiff(localTime, remoteTime);
      //console.log("diff: " + diff + "\n");
      //var diffDays = getDayDiff(localDate, remoteDate);
      //console.log("diffDays: " + diffDays + "\n");
      //var diffHours = getHourDiff(localTime, remoteTime);
      //console.log("diffHours: " + diffHours + "\n");
      //var diffMins = getMinuteDiff(localTime, remoteTime);
      //console.log("diffMins: " + diffMins + "\n");

      function getTime(location, identifier){
        //Fetch remote info
        Ember.$.ajax({
          type: "GET",
          url: "http://api.zoneconvert.com?location=" + location,
          success: function(json) {
            console.log(json);
            var result = JSON.parse(json).time;
            if (identifier === 'local'){
              localDateTime = result;
            } else { remoteDateTime = result; }
          },
          async: false,
          error: function(e) {  console.log(e.message);
          }
        });
      }

      function getDiff(local, remote){
        local = new Date(local);
        remote = new Date(remote);
        var diff = local.getTime() - remote.getTime();
        return diff;
      }

      function getDayDiff(local, remote){
        var diff = getDiff(local, remote);
        var diffDays = Math.ceil(diff / (1000*3600*24));
        return diffDays;
      }

      function getHourDiff(local, remote){
        var diff = getDiff(local, remote);
        var diffDays = getDayDiff(local, remote);
        var diffHours = Math.ceil(diff / (1000*3600));
        return diffHours;
      }

      function getMinuteDiff(local, remote){
        var diff = getDiff(local, remote);
        var diffHours = getHourDiff(local, remote);
        var diffMins = Math.ceil(diff / (1000*60))-(60*Math.abs(diffHours));
        return diffMins;
      }

      function addDays(date, numDays) {
        var result = new Date(date);
        result.setDate(date.getDate() + numDays);
        return result;
      }

      function extractDate(timeDate){
        timeDate = timeDate.trim();
        var reg = /^([0-9]{4})-([0-9]{2})-([0-9]{2})/;
        return reg.exec(timeDate)[0];
      }

      function extractTime(timeDate){
        timeDate = timeDate.trim();
        var reg = /([0-9]{2}):([0-9]{2}):([0-9]{2})$/;
        return reg.exec(timeDate)[0];
      }

      function getHourDiff(localDateTime, remoteDateTime){

      }

      function normalizeTime(time){

      }
    }
  }
});

export default ZonesController;
