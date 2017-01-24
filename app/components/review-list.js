import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addReview(){
      this.sendAction('addReview')
    }
  }
});
