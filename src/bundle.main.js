/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	window.onload = function () {
	  // Put magical items on the page
	  var listOfProducts = document.getElementById("product-list");
	  var cartDiv = document.getElementById("cart");
	  var cartNumberOfItems = document.getElementById("number-of-items-in-cart");
	  var cartTotal = document.getElementById("order-total");
	  var cartTotalH2 = document.getElementById("order-total-h2");
	  var cartTotalInt = parseInt(cartTotal.innerText);
	  var cartTotalItemsInt = parseInt(cartNumberOfItems.innerText);
	  var cartEmptyText = document.getElementById("cart-empty");

	  $.getJSON("data/db.json", function (data) {

	    // put products on page
	    var dataProducts = data.products;

	    // handle cart logic
	    var cartItems = data.cart_order;

	    for (var i = 0; i < dataProducts.length; i++) {
	      var product = dataProducts[i];
	      // create panel panel-default
	      var newPanelDiv = document.createElement("div");
	      newPanelDiv.classList.add("panel");
	      newPanelDiv.classList.add("panel-default");
	      newPanelDiv.setAttribute("id", product.id);
	      // create panel-body
	      var newPanelBodyDiv = document.createElement("div");
	      newPanelBodyDiv.classList.add("panel-body");
	      // create element for product id, but do not display it
	      var productIdP = document.createElement("p");
	      productIdP.innerText = product.id;
	      productIdP.classList.add("hide");
	      // create h3 for each product's name
	      var newH3 = document.createElement("h3");
	      newH3.innerText = product.name;
	      // create paragraph for each product's description
	      var descP = document.createElement("p");
	      descP.innerText = product.description;
	      // create paragraph for each product's price
	      var priceP = document.createElement("p");
	      priceP.innerText = product.price;
	      priceP.classList.add("lead");
	      // create button to add to cart
	      var addToCartButton = document.createElement("button");
	      addToCartButton.classList.add("btn");
	      addToCartButton.classList.add("btn-info");
	      addToCartButton.innerHTML = "Add to Cart";

	      // append information to listOfProducts
	      newPanelBodyDiv.appendChild(productIdP);
	      newPanelBodyDiv.appendChild(newH3);
	      newPanelBodyDiv.appendChild(descP);
	      newPanelBodyDiv.appendChild(priceP);
	      newPanelBodyDiv.appendChild(addToCartButton);
	      newPanelDiv.appendChild(newPanelBodyDiv);
	      listOfProducts.appendChild(newPanelDiv);
	    }

	    function convertPriceStringToInteger(priceString) {
	      return parseInt(priceString.substr(1, priceString.length - 1));
	    }

	    function updateCartQuantityTotal() {
	      var total = 0;
	      if (cartItems.length > 0) {
	        for (var i = 0; i < cartItems.length; i++) {
	          total += cartItems[i].quantity;
	        }
	      }
	      return total;
	    }

	    function updateCartMoneyTotal() {
	      var costTotal = 0;
	      if (cartItems.length > 0) {
	        for (var i = 0; i < cartItems.length; i++) {
	          var itemPrice = convertPriceStringToInteger(cartItems[i].price);
	          costTotal += cartItems[i].quantity * itemPrice;
	        }
	      }
	      return costTotal;
	    }

	    function updateCartTotals() {
	      cartTotalItemsInt = updateCartQuantityTotal();
	      cartNumberOfItems.innerText = cartTotalItemsInt;
	      cartTotalInt = updateCartMoneyTotal();
	      cartTotal.innerText = cartTotalInt;
	      cartTotalH2.innerText = cartTotalInt;
	    }

	    function findItemInCart(itemId) {
	      for (var i = 0; i < cartItems.length; i++) {
	        if (cartItems[i].id === itemId) {
	          return i;
	        }
	      }
	    }

	    function addItemToCart(itemId, itemName, itemDescription, itemPrice) {
	      // push item to cart array
	      cartItems.push({
	        "id": itemId,
	        "name": itemName,
	        "description": itemDescription,
	        "price": itemPrice,
	        "quantity": 1
	      });
	      // render cart on page
	      var cartItem = cartItems[cartItems.length - 1];
	      // create html layout elements
	      var itemPanelDiv = document.createElement("div");
	      itemPanelDiv.classList.add("panel");
	      itemPanelDiv.classList.add("panel-default");
	      itemPanelDiv.setAttribute("id", "cart-item-" + itemId);
	      var itemPanelBodyDiv = document.createElement("div");
	      itemPanelBodyDiv.classList.add("panel-body");
	      var itemRowDiv = document.createElement("div");
	      itemRowDiv.classList.add("row");
	      var itemColXS9Div = document.createElement("div");
	      itemColXS9Div.classList.add("col-xs-9");
	      var itemColXS3Div = document.createElement("div");
	      itemColXS3Div.classList.add("col-xs-3");
	      // create cart elements
	      var itemRemoveLink = document.createElement("a");
	      itemRemoveLink.classList.add("text-small");
	      itemRemoveLink.classList.add("text-muted");
	      itemRemoveLink.classList.add("pull-right");
	      itemRemoveLink.classList.add("remove-link");
	      itemRemoveLink.innerText = "remove";
	      var itemInCartId = document.createElement("p");
	      itemInCartId.innerText = cartItem.id;
	      itemInCartId.classList.add("hide");
	      itemInCartId.setAttribute("id", "item-id-" + itemId);
	      var itemH4 = document.createElement("h4");
	      itemH4.innerText = cartItem.name;
	      var itemPriceP = document.createElement("p");
	      itemPriceP.classList.add("lead");
	      itemPriceP.classList.add("cart-item-price");
	      itemPriceP.innerText = cartItem.price;
	      var itemQuantitySpan = document.createElement("span");
	      itemQuantitySpan.setAttribute("id", "item-quantity-" + itemId);
	      itemQuantitySpan.innerText = cartItem.quantity;
	      // make decrease and increase quantity buttons
	      var decreaseButton = document.createElement("button");
	      decreaseButton.classList.add("btn");
	      decreaseButton.classList.add("btn-default");
	      decreaseButton.classList.add("btn-sm");
	      decreaseButton.classList.add("decrease-button");
	      decreaseButton.innerText = "-";
	      var increaseButton = document.createElement("button");
	      increaseButton.classList.add("btn");
	      increaseButton.classList.add("btn-default");
	      increaseButton.classList.add("btn-sm");
	      increaseButton.classList.add("increase-button");
	      increaseButton.innerText = "+";
	      // append elements to each other
	      itemColXS3Div.appendChild(itemPriceP);
	      itemColXS3Div.appendChild(itemRemoveLink);
	      itemColXS9Div.appendChild(itemH4);
	      itemColXS9Div.appendChild(decreaseButton);
	      itemColXS9Div.appendChild(itemQuantitySpan);
	      itemColXS9Div.appendChild(increaseButton);
	      itemRowDiv.appendChild(itemColXS9Div);
	      itemRowDiv.appendChild(itemColXS3Div);
	      itemPanelBodyDiv.appendChild(itemInCartId);
	      itemPanelBodyDiv.appendChild(itemRowDiv);
	      itemPanelDiv.appendChild(itemPanelBodyDiv);
	      cartDiv.appendChild(itemPanelDiv);
	    }

	    // add event listener to add products to cart
	    listOfProducts.addEventListener("click", function (event) {
	      if (event.target.classList.contains("btn")) {
	        var addToCartButton = event.target;
	        var itemId = addToCartButton.parentNode.children[0].innerText;
	        var itemName = addToCartButton.parentNode.children[1].innerText;
	        var itemDescription = addToCartButton.parentNode.children[2].innerText;
	        var itemPrice = addToCartButton.parentNode.children[3].innerText;
	        var itemIndexInCart = findItemInCart(itemId);
	        if (itemIndexInCart === undefined) {
	          addItemToCart(itemId, itemName, itemDescription, itemPrice);
	        } else {
	          var itemIndexInCart = findItemInCart(itemId);
	          var cartItem = cartItems[itemIndexInCart];
	          cartItem.quantity++;
	          var itemQuantitySpan = document.getElementById("item-quantity-" + cartItem.id);
	          itemQuantitySpan.innerText = cartItem.quantity;
	        }
	        // update button color and text
	        addToCartButton.classList.remove("btn-info");
	        addToCartButton.classList.add("btn-success");
	        addToCartButton.innerHTML = "<span class='glyphicon glyphicon-ok'></span>  Added to Cart!";
	        setTimeout(function () {
	          addToCartButton.classList.remove("btn-success");
	          addToCartButton.classList.add("btn-info");
	          addToCartButton.innerHTML = "Add to Cart";
	        }, 10000);
	        // remove empty cart filler text
	        cartEmptyText.classList.add("hide");
	        // update cart totals
	        updateCartTotals();
	      }
	    });

	    // click handler for removing items from cart or adjusting quantities of items
	    cartDiv.addEventListener("click", function (event) {
	      var cartItemId = event.target.parentNode.parentNode.parentNode.children[0].innerText;
	      var itemIndexInCart = findItemInCart(cartItemId);
	      if (event.target.classList.contains("remove-link")) {
	        // remove item from cart array
	        cartItems.splice(itemIndexInCart, 1);
	        // remove item from cart on page
	        var itemToBeRemoved = document.getElementById("cart-item-" + cartItemId);
	        cartDiv.removeChild(itemToBeRemoved);
	        if (cartItems.length === 0) {
	          cartEmptyText.classList.remove("hide");
	        }
	      } else if (event.target.classList.contains("decrease-button")) {
	        var cartItem = cartItems[itemIndexInCart];
	        if (cartItem.quantity > 1) {
	          cartItem.quantity--;
	          var itemQuantitySpan = document.getElementById("item-quantity-" + cartItem.id);
	          itemQuantitySpan.innerText = cartItem.quantity;
	        }
	      } else if (event.target.classList.contains("increase-button")) {
	        var cartItem = cartItems[itemIndexInCart];
	        cartItem.quantity++;
	        var itemQuantitySpan = document.getElementById("item-quantity-" + cartItem.id);
	        itemQuantitySpan.innerText = cartItem.quantity;
	      }
	      updateCartTotals();
	    });

	    // put featured magical item on page near cart
	    var featuredDiv = document.getElementById("featured-item");
	    var featuredProduct = data.featured_product;
	    var featuredH3 = document.createElement("h3");
	    featuredH3.classList.add("text-center");
	    featuredH3.innerText = featuredProduct.name;
	    var featuredP = document.createElement("p");
	    featuredP.classList.add("text-center");
	    featuredP.innerText = featuredProduct.description;
	    var featuredButton = document.createElement("button");
	    featuredButton.classList.add("btn");
	    featuredButton.classList.add("btn-info");
	    featuredButton.classList.add("btn-block");
	    featuredButton.innerHTML = "Pre-Order for " + featuredProduct.price;
	    featuredDiv.appendChild(featuredH3);
	    featuredDiv.appendChild(featuredP);
	    featuredDiv.appendChild(featuredButton);

	    featuredButton.addEventListener("click", function (event) {
	      var featuredProductId = "0";
	      var featuredProductIndexInCart = findItemInCart(featuredProductId);
	      if (featuredProductIndexInCart === undefined) {
	        addItemToCart(featuredProductId, featuredProduct.name, featuredProduct.description, featuredProduct.price);
	      } else {
	        var itemIndexInCart = findItemInCart(featuredProductId);
	        var cartItem = cartItems[itemIndexInCart];
	        cartItem.quantity++;
	        var itemQuantitySpan = document.getElementById("item-quantity-" + cartItem.id);
	        itemQuantitySpan.innerText = cartItem.quantity;
	      }

	      featuredButton.classList.remove("btn-info");
	      featuredButton.classList.add("btn-success");
	      featuredButton.innerHTML = "<span class='glyphicon glyphicon-ok'></span>  Pre-Ordered!";
	      setTimeout(function () {
	        featuredButton.classList.remove("btn-success");
	        featuredButton.classList.add("btn-info");
	        featuredButton.innerHTML = "Pre-Order for " + featuredProduct.price;
	      }, 10000);
	      cartEmptyText.classList.add("hide");
	      updateCartTotals();
	    });
	  });

	  // toggling cart logic
	  var isMobile = window.matchMedia("only screen and (max-width: 760px)");
	  var arrow = document.getElementById('toggle-arrow');
	  if (isMobile.matches) {
	    $("#togglable-cart").hide();
	    arrow.innerHTML = '<span class="glyphicon glyphicon-chevron-down"></span>';
	  }
	  $("#toggle-arrow").click(function () {
	    $("#togglable-cart").toggle("blind");
	    changeArrow();
	  });
	  function changeArrow() {
	    if (arrow.innerHTML === '<span class="glyphicon glyphicon-chevron-up"></span>') {
	      arrow.innerHTML = '<span class="glyphicon glyphicon-chevron-down"></span>';
	    } else {
	      arrow.innerHTML = '<span class="glyphicon glyphicon-chevron-up"></span>';
	    }
	  }
	};

/***/ })
/******/ ]);