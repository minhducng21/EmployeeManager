(function (app) {
    var DetailsController = function ($scope, $routeParams, empService) {
        var id = $routeParams.id;
        empService
            .getById(id)
            .then(function (emp) {
                $scope.employee = emp.data;
            });

        $scope.update = function (emp) {
            empService.update(emp)
                .then(function () {
                    angular.extend($scope.employee, $scope.emp);
                });
        }
    };
    app.controller("DetailsController", DetailsController);
}(angular.module("my-Employee")));