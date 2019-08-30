(function () {
    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', function ($scope) {
            $scope.value = "first";
            $scope.Message = "";
            $scope.CheckValue = function () {
                if ($scope.value.length == 0) {
                    $scope.Message = "Enter data.";
                }
                else {
                    var items = $scope.value.split(',');
                    if (items.length <= 3)
                        $scope.Message = "Enjoy";
                    else 
                        $scope.Message = "Too Much";
                }
            };
        });

})();
