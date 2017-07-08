# Code Challenge: Magical Bedroom Products

You're charged with building a product listing page and mini-cart for a store that sells magical bedroom products.

## Guidelines

It's a good idea to start building this project 'mobile first', starting with smaller breakpoints. We will be testing in mobile device mode.

UX sketches for the page can be found in `designs` folder.

The list of products is located in `src/data/db.json`. Feel free to use this as you see fit.

This product page must work in latest version of Chrome.

#### JavaScript

If you choose to use one of the heavier frameworks(React, Angular, Ember, etc...) or something like it please be detailed in your documentation as the reviewer might not be familiar with it and please, explain your reason for using such a framework.

If you'd like to use ES6, we've provided a simple babel + webpack solution for you to get started with. Just run these commands and you'll be off to the races! Make sure you have node(7.4+) and npm installed.
* `npm i -g gulp-cli`
* `npm install`
* `gulp` will kick off a file watcher with babel/webpack js transpiler and browser-sync for auto-reloading.
  * `gulp js` will run babel/webpack transpiler.
  * `gulp watch` will kick off a file watcher with babel/webpack js transpiler.
  * `gulp browser-sync` will run browser-sync and auto-reload the browser on changes to js, css, or html files.

#### CSS
You can use any flavor of CSS, from Sass to Post to Less to vanilla CSS with CSS variables.

#### HTML
We recommend using an HTML templating language to keep your code DRY. For example, a product listing can be one template that you iterate through. A product item in the mini-cart could be another.

Lastly, please complete the questions in the recap before submitting your test.

## Feature Stories

As a Customer
I want to see a list of all the magical products
So that I can learn about them and add them to my cart to purchase

When I buy a product
Then it will be added to the minicart
And the minicart should show the product name and price (without a page refresh)
And the minicart should allow me to increase and/or decrease the quantity of the product
And the minicart should allow me to remove the product
And the minicart total should reflect price of the product in the cart
And the minicart count should update to reflect total number of products

When I buy a second product
Then it will be added to the minicart
And the minicart should show two products (without a page refresh)
And the minicart count should update to reflect total number of products
And the minicart total should reflect the cost of both products
And the minicart should allow me to remove each product individually

When I remove an item from the minicart
Then the total will update to reflect
And the cart count will update
And all changes should happen without page refresh

On mobile, when I tap the arrow the mini-cart should show and when
I tap it again it will hide itself.


## Recommendations

* Assume you are working on this puzzle as part of the team not just an individual code puzzle
* Take care to organize your directory structure logically
* Add documentation where you think is best to help your team members understand your feature
* Start with the code in the zip file and create a repo.
* Mobile first, we'll be testing it this way!

### Nice to Have

This test is designed for all frontend proficiencies and specializations. It is designed to allow you to showcase your expertise. It is intentionally open ended.

If you have design skills, we hope you'll show us with a more stylized page.

If you love animations, we hope you'll add delight to the page.

If you've never written tests, but want to try—go for it!

If JavaScript is not your forte, put your time into HTML and CSS. We would expect your test to be fully responsive.

This is your opportunity to show us what you love about the web and how you write code.

Making the cart state persist across full page refreshes would be nice, though not required.

## Timeline

If you need more time, please let your recruiter know.

If you have any questions along the way, reach out to your recruiter.
