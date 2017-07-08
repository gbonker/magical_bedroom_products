window.onload = function() {
  // Put elements on the page
  var listOfProducts = document.getElementById("product-list");

  $.getJSON("data/db.json", function(data) {
    console.log(data);
    console.log(data.products);
    var dataProducts = data.products;

    for (var i = 0; i < dataProducts.length; i++) {
      // create panel panel-default
      var newPanelDiv = document.createElement("div");
      newPanelDiv.classList.add("panel");
      newPanelDiv.classList.add("panel-default");
      newPanelDiv.setAttribute("id", dataProducts[i].id);
      // create panel-body
      var newPanelBodyDiv = document.createElement("div");
      newPanelBodyDiv.classList.add("panel-body");
      // create h3 for each product's name
      var newH3 = document.createElement("h3");
      newH3.innerText = dataProducts[i].name;
      // create paragraph for each product's description
      var descP = document.createElement("p");
      descP.innerText = dataProducts[i].description;
      // create paragraph for each product's price
      var priceP = document.createElement("p");
      priceP.innerText = dataProducts[i].price;
      priceP.classList.add("lead");
      // append information to listOfProducts
      newPanelBodyDiv.appendChild(newH3);
      newPanelBodyDiv.appendChild(descP);
      newPanelBodyDiv.appendChild(priceP);
      newPanelDiv.appendChild(newPanelBodyDiv);
      listOfProducts.appendChild(newPanelDiv);
    }

  });
}