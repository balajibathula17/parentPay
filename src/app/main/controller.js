'use strict';
angular.module('parentpay')
  .controller('MainCtrl', function($scope, serverRequest) {
    $scope.basket = [];
    $scope.isOpenBasket = true;
    serverRequest.getRequest().then(function(data) {
      $scope.products = data.categories.products;
    });
    $scope.selectProduct = function(product) {
      $scope.basket.push(product);
    }
    $scope.$watch('basket', function() {
      var _basketLength = $scope.basket.length;
      if (_basketLength == 0) {
        $scope.basketPrice = 0;
        $scope.basketItems = 0;
      };
      $scope.basketItems = _basketLength;
      $scope.basketPrice = 0;
      for (var i = 0; i < _basketLength; i++) {
        $scope.basketPrice = $scope.basketPrice  + $scope.basket[i].unitPrice;
      };

    }, true);
    $scope.selectBasket = function(){
      $scope.isOpenBasket = false;
    }
    $scope.submitBasket = function(){
      if ($scope.basket.length <= 0) {
        alert("please select the items before checkout");
      }else{
        serverRequest.postRequest($scope.basket).then(function(data){
        });
      }
    }

  });
