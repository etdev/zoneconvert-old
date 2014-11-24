import Ember from 'ember';
import Resolver from 'ember/resolver';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'zones', // TODO: loaded via config
  Resolver: Resolver
});

function toggleHeader(){
                var menu_icon = Ember.$("#menu_icon");
                if (menu_icon.attr("href") === "#"){
                  menu_icon.attr("href", "#nav");
                  window.location = '#nav';
                  console.log("Setting to #nav");
                }
                else {
                  menu_icon.attr("href", "#");
                  window.location = '#';
                  console.log("Setting to #");
                }
              }
export default App;

