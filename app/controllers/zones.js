import Ember from 'ember';

var ZonesController = Ember.ArrayController.extend({

  actions: {
    parseInput: function(){
    var locationLocal, locationRemote, targetDate, topAlertBox, targetTime;

    try{
        locationLocal = this.get('locationLocal');
        locationRemote = this.get('locationRemote');
        targetDate = this.get('targetDate');
        topAlertBox  = document.getElementById("result");
        targetTime = document.getElementById("targetTime").value;
      }catch(e) {
        topAlertBox.innerHTML = "Failure! Please enter valid locations"; topAlertBox.className = "flash-error"; }
        var targetDateTime = targetDate + " " + targetTime;
        var localDateTime;
        getTime(locationLocal, 'local');
        var remoteDateTime;
        getTime(locationRemote, 'remote');
        var hourMinDiff = getHourMinDiff(localDateTime, remoteDateTime);
        var newTargetDateTime =  addDateTime(targetDateTime, hourMinDiff);
        topAlertBox.innerHTML = "Result: " + newTargetDateTime;
        topAlertBox.className = "flash-success";

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

      function extractDate(timeDate){
        timeDate = timeDate.trim();
        var reg = /^([0-9]{4})-([0-9]{2})-([0-9]{2})/;
        var regResult = reg.exec(timeDate);
        return regResult;
      }

      function extractTime(timeDate){
        timeDate = timeDate.trim();
        var reg = /([0-9]{2}):([0-9]{2}):([0-9]{2})$/;
        var regResult = reg.exec(timeDate);
        return regResult;
      }

      function getHourMinDiff(localDateTime, remoteDateTime){
        var dayDiff = extractDate(localDateTime)[3] - extractDate(remoteDateTime)[3];
        var hourDiff = extractTime(localDateTime)[1] - extractTime(remoteDateTime)[1] + 24*dayDiff;
        var minDiff = extractTime(localDateTime)[2] - extractTime(remoteDateTime)[2];
        if (minDiff < 5) { minDiff = 0; }
        return [hourDiff, minDiff];
      }

      function addDateTime(target, hourMinDiff){
        var targetUnix = (new Date(target).getTime())/1000;
        var diffSecs = (hourMinDiff[0]*3600) + (hourMinDiff[1]*60);
        var resultSecs = targetUnix + diffSecs;
        var resultDate = new Date(resultSecs*1000);
        var year = resultDate.getFullYear();
        var month = resultDate.getMonth()+1;
        var day = resultDate.getDate();
        var hour = resultDate.getHours();
        if (hour < 10){ hour = '0' + hour; }
        var min = resultDate.getMinutes();
        if (min < 10){ min = '0' + min; }
        var sec = resultDate.getSeconds();
        if (sec < 10){ sec = '0' + sec; }
        var result = "" + year  + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
        return result;
      }
    }
  }
});

export default ZonesController;
