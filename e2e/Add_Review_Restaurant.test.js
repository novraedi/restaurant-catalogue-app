/* eslint-disable no-undef */
Feature('Add Review Restaurant');

Scenario('Add Review to Restaurant', ({ I }) => {
  I.amOnPage('/');

  I.wait(3);

  I.seeElement('.restaurant-item__name a');
  I.click(locate('.restaurant-item__name a').first());

  const toggleReviewsButton = locate('.restaurant__toggleReviews');
  I.seeElement(toggleReviewsButton);
  I.click(toggleReviewsButton);
  I.seeElement('.restaurant__reviews--show');

  const name = 'jabriq';
  const reviewText = 'enak';

  I.fillField('#inputReviews__name', name);
  I.fillField('#inputReviews__review', reviewText);
  I.click('.inputReviews__submitBtn');

  I.see(name, '.reviewer__name');
  I.see(reviewText, '.reviewer__review');
});
