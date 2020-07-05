(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.user = {};

  service.saveUser = function(user,dish) {
    console.log(user);
    service.user = angular.copy(user);
    console.log(service.user);
    service.dish=angular.copy(dish)
  };

  service.getUser = function() {
    console.log(service.user);
    return service.user;
  };

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavoriteDish = function(short_name) {
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json');
  }


}



})();
