import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    history.forward();
    return;
  }
});
