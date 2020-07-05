(function () {
  "use strict";

  angular.module('public')
  .controller('signupController',signupController);

  signupController.$inject=['MenuService'];

  function signupController(MenuService) {
    var reg=this;
    reg.display=true;
    reg.user=[];
    console.log(reg.user);

    reg.submit=function () {
      if (reg.user.item) {
        MenuService.getMenuItems(reg.user.item.toUppercase).then(function (result) {
          console.log(result.menu_items);
          for (var i = 0; i < result.menu_items.length; i++) {
            if (reg.user.item = result.menu_items[i].short_name) {
              reg.display=false;
              return;
            }
          }
          reg.user=[];
          })
          console.log(reg.user);
      }

    }
  }
})()
