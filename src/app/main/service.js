'use strict';
angular.module('parentpay')
  .factory('serverRequest', function($q, $http) {
    var __headers = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
    var _getRequest = function() {
      var path = '../mockdata.json';
      var deferred = $q.defer();
      var requestObj = {
        method: 'GET',
        url: path,
        headers: __headers
      };
      $http(requestObj)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject({
            error: data
          });
        });
      return deferred.promise;
    }

    var _postRequest = function(data) {
      var path = 'url';
      var deferred = $q.defer();
      var requestObj = {
        method: 'POST',
        url: path,
        data: data,
        headers: __headers
      };
      $http(requestObj)
        .success(function(data) {
          deferred.resolve(data);
        })
        .error(function(data) {
          deferred.reject({
            error: data
          });
        });
      return deferred.promise;
    }

    return {
      getRequest: _getRequest,
      postRequest: _postRequest
    }

  });
