import Ember from 'ember';

var ItemsController = Ember.ArrayController.extend({
    actions: {
      createItem: function(){
        var desc = this.get('enterDesc');
        var cals = this.get('enterCals');
        console.log("desc: " + desc + ", cals: " + cals);
        var item = this.store.createRecord('item', {
          desc: desc,
          calories:  cals
        });
        this.set('enterDesc', '');
        this.set('enterCals', '');
        item.save();
      }
    }
  });

export default ItemsController;
