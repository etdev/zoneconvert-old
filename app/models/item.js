import DS from 'ember-data';

var Item = DS.Model.extend({
  desc: DS.attr('string'),
  calories: DS.attr('string')
    });

export default Item;
