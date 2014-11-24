import DS from 'ember-data';

var ZoneAdapter = DS.RESTAdapter.extend({
  host: 'http://api.zoneconvert.com:9292'
});

export default ZoneAdapter;
