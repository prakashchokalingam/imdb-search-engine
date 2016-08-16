import Ember from 'ember';

export function loadMore(params/*, hash*/) {
  if(params[2] == "boolean") {
    if(params[0] - params[1] <= 0) {
      return "hidden"
    }
  }
  else {
    return params[0] - params[1];
  }
}
export default Ember.Helper.helper(loadMore);
