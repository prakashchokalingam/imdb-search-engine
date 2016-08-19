import Ember from 'ember';
// asset values
var assets = Ember.Object.create({
  advanceSearch: false,
  search: "",
  type: "movie",
  year: "",
  data: "",
});
// model
export default Ember.Route.extend({
  model() {
    this._super(...arguments);
    return assets;
  },
  actions: {
    EnableAdvanceSearch: function() {
      assets.toggleProperty('advanceSearch');
      let _this = this;
      // wait till dom elements to render
      Ember.run.later(function() {
        _this.send('setSearchType',assets.type);;
      },300);
    },
    setSearchValue: function(searchValue, event) {
      assets.set('search', searchValue);
      // if key pressed is enter
      if (event.keyCode === 13) {
        this.send("sendSearchApi");
      }
    },
    setSearchType: function(value) {
      console.log(value);
      $(".chip").removeClass('active');
      let classname= `.chip.${value}`;
      $(classname).addClass('active');
      assets.set('type',value);
    },
    setSearchYear: function(searchYear) {
      assets.set('year', searchYear);
    },
    sendSearchApi: function() {
      this.transitionTo('index.search', assets.get('type'), assets.get('search'), assets.get('year'));
    }
  }
});
