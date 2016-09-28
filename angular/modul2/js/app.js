(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService){
  var tobuy = this;

  tobuy.items = ShoppingListCheckOffService.getItems();
  tobuy.move = function (itemIndex) {
    ShoppingListCheckOffService.moveItem (itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService){
  var bougth = this;

  bougth.items = ShoppingListCheckOffService.getBought();

}

function ShoppingListCheckOffService (){
  var service = this;

  var items  = [
    {item: "Cookies", quantity: 10},
    {item: "Milk", quantity: 5},
    {item: "Donuts", quantity: 3},
    {item: "Bread", quantity: 1},
    {item: "Cackes", quantity: 2}];

  var bougthList = [];

  service.getItems = function () {
    return items;
  };

  service.getBought = function()  {
    return bougthList;
  };

  service.moveItem = function (itemIndex){
    var item = items[itemIndex];
    bougthList.push (item);
    items.splice (itemIndex, 1);
  };

}

})();
