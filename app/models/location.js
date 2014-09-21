import DS from 'ember-data';

export default DS.Model.extend({
  street: DS.attr('string'),
  adminArea6: DS.attr('string'),
  adminArea6Type: DS.attr('string'),
  adminArea5: DS.attr('string'),
  adminArea5Type: DS.attr('string'),
  adminArea4: DS.attr('string'),
  adminArea4Type: DS.attr('string'),
  adminArea3: DS.attr('string'),
  adminArea3Type: DS.attr('string'),
  adminArea1: DS.attr('string'),
  adminArea1Type: DS.attr('string'),
  postalCode: DS.attr('string'),
  geocodeQualityCode: DS.attr('string'),
  geocodeQuality: DS.attr('string'),
  dragPoint: DS.attr('string'),
  sideOfStreet: DS.attr('string'),
  linkId: DS.attr('string'),
  unknownInput: DS.attr('string'),
  type: DS.attr('string'),
  lat: DS.attr('string'),
  lng: DS.attr('string'),
  disp_lat: DS.attr('string'),
  disp_lng: DS.attr('string'),
  mapUrl: DS.attr('string')
});
