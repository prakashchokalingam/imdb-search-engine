import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.transitionTo('index.search',params.type,params.key,"");
  }
});
