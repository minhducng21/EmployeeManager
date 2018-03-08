(function (app) {
    var empService = function ($http, empApiUrl) {

        var getAll = function () {
            return $http.get(empApiUrl);
        };
        var getById = function (id) {
            return $http.get(empApiUrl + id);
        };
        var create = function (emp) {
            return $http.post(empApiUrl, emp);
        };
        var update = function (emp) {
            return $http.put(empApiUrl + emp.Id, emp);
        };
        var destroy = function (id) {
            return $http.delete(empApiUrl + id);
        };
        return {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            delete: destroy
        };
    };
    app.factory("empService", empService);
}(angular.module("my-Employee")));