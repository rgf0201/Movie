import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReview(){
      console.log('Handling add Review action in controller...');
      this.set('model.newReview.id',this.get('model').reviewList.length +1);
      let pushReview = {
        id: this.get('model').newReview.id,
        title: this.get('model').newReview.title,
        reviewTxt: this.get('model').newReview.reviewTxt
      };
      this.get('model').reviewList.pushObject(pushReview);
      console.log('after update...' + this.get('model').newReview.id);
    }
  }
});
