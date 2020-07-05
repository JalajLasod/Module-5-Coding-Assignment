(function() {
    'use strict';

    angular.module('public').controller('signupController', signupController);

    signupController.$inject = ['MenuService'];

    function signupController(MenuService) {
      var ctrl = this;

        ctrl.user = {};
        // ctrl.favoriteDish = {};

        ctrl.showError = false;       // When this value is true error about the favorite dish wiil be shown
        ctrl.showMessage = false;     // When this value is true message about successfull signup will be shown

        ctrl.signup = function(form) {
            ctrl.showError = false;
            ctrl.showMessage = false;
            // If the form is not valid don't submit
            if(form.$invalid) {
                console.log('The form is not valid');
                return;
            }

            MenuService.getFavoriteDish(ctrl.favoriteDish).then(function(response) {
                ctrl.user.favoriteDishDetails = response.data;
                console.log(ctrl.favoriteDish);
                MenuService.saveUser(ctrl.user,ctrl.favoriteDish);
                ctrl.showMessage = true;
            }, function(error) {
                console.log(error);
                ctrl.showError = true;
            });

        }
    };




})();
