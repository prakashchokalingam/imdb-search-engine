import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path:'/'},function() {
    // if user refreshes page without year -> transitionTo to 'search' with year = ""
    this.route('missurl',{path:'search/:type/:key'});
    this.route('search', {path:'search/:type/:value/:year'});
    this.route('view',{path:'view/:id/:title'});
  });
  this.route('back');
  this.route('forward');
});

export default Router;
