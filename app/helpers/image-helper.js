import Ember from 'ember';

export function imageHelper(params/*, hash*/) {
  if(params[0] === "N/A") {
    params[0] = "/assets/images/NA.png";
  }
  return params;
}

export default Ember.Helper.helper(imageHelper);
