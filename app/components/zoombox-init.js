import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    $(".zoombox").materialbox();
  }
});
