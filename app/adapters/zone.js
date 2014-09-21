import Ember from 'ember';
import DS from 'ember-data';

var ZoneAdapter = DS.RESTAdapter.extend({
  host: 'http://api.zn.ericturnerdev.com'
});

export default ZoneAdapter;
