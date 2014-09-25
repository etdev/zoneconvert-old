import DS from 'ember-data';

var ZoneAdapter = DS.RESTAdapter.extend({
  host: 'http://api.zn.etdev.me'
});

export default ZoneAdapter;
