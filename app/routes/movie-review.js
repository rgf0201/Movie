import Ember from 'ember';
let movieDetails = {
title : 'greatest Sci-fi Movie ever',
releaseDate: '1976',
description: 'cool spaceships',
reviewList: [
  {id: 1, title: 'first review', reviewTxt: 'blah, blah'},
  {id: 2, title: 'second review', reviewTxt: 'blah, blah'},
  {id: 3, title: 'third review', reviewTxt: 'blah, blah'},
],
newReview: {id: 0, title: '', reviewTxt: ''}
};
export default Ember.Route.extend({
  model(){
    return movieDetails;


  }

});
