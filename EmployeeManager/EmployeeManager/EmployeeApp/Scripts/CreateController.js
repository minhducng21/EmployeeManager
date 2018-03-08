(function (app) {
    var CreateController = function ($scope, empService, $route) {
        
        $scope.cancel = function () {
            $scope.emp = null;
        };

         $scope.addEmp = function (emp) {
            empService.create(emp)
                .then(function () {
                    $scope.employees.push($scope.emp);
                    $route.reload();
                    $scope.emp = null;
                });
        };
    };
    app.controller("CreateController", CreateController);
}(angular.module("my-Employee")));