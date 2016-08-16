import Ember from 'ember';
var modeldata = Ember.Object.create({
  results: "",
  page: 1,
  url: "",
  loading: false,
  loadmore: false,
});
export default Ember.Route.extend({
  model(params) {
    this._super(...arguments);
    if(params.type=="all") {
      params.type = "";
    }
    let url = `http://www.omdbapi.com/?s=${params.value}&type=${params.type}&y=${params.year}`;
    modeldata.set('url', url);
    this.loadData(url, true);
    return modeldata;
  },
  loadData: function(url, initload = false) {
    if(initload) {
      modeldata.set('loading',true);
    } else {
      modeldata.set('loadmore',true);
    }
    $.getJSON(url, function() {}).done(function(data) {
      if (data.Response === "True") {
        data.Response = true;
      } else {
        data.Response = false;
      }
      if (initload) {
        modeldata.set('results', data);
        modeldata.set('page', 1);
        modeldata.set('loading',false);
      } else {
        let newArr = modeldata.get('results').Search.concat(data.Search);
        modeldata.set('results.Search', newArr);
        modeldata.set('loadmore',false);
      }
    }).error(function() {});
  },
  actions: {
    loadMore: function() {
      let url = `${modeldata.url}&page=${modeldata.get('page')+1}`;
      modeldata.set('page', modeldata.get('page') + 1);
      return this.loadData(url);
    }
  }
});
