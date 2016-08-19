import Ember from 'ember';
var Movie = Ember.Object.create({
  results: "",
  Loading:false,
});
export default Ember.Route.extend({
  beforeModel() {
    Movie.set('Loading',true);
  },
  model(params) {
    let url = `https://www.omdbapi.com/?i=${params.id}&tomatoes=true`;
    $.getJSON(url,function(){
    }).done(function(data){
      if(data.Response == "True") {
        data.Response = true;
      } else {
        data.Response = false;
      }
      Movie.set('Loading',false);
      Movie.set('results',data);
    }).error(function(){
      let custome_obj = {Response:false};
      Movie.set('results',custome_obj);
    });
    return Movie;
  },
  didInsertElement: function() {
    console.log("x");
  }
});
