(function () {
    var app = angular.module("my-Employee", ["ngRoute"])
    var config = function ($routeProvider) {
        $routeProvider
        .when("/list",
            { templateUrl: "/EmployeeApp/Views/List.html", controller: "EmployeeController" })
        .when("/details/:id",
            { templateUrl: "/EmployeeApp/Views/Details.html", controller: "DetailsController" })
        .otherwise(
            { redirectTo: "/list", controller: "EmployeeController" });
    };
    app.config(config);
    app.constant("empApiUrl", "/api/employees/");
}());