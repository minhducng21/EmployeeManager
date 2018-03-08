(function (app) {
    var EmployeeController = function ($scope, empService) {

        var getAllEmployees = () => {
            empService.getAll().then(function (emps) {
                $scope.employees = emps.data;
            });
        };
        getAllEmployees();

        $scope.delete = function (emp, index) {
            empService.delete(emp.Id)
                .then(function () {
                    $scope.employees.splice(index, 1);
                    getAllEmployees();
                });
        };
    };
    app.controller("EmployeeController", EmployeeController);
}(angular.module("my-Employee")));