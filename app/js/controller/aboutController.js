angular.module('inventaRio').controller('aboutController', function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'https://my.api.mockaroo.com/people.json?key=3ef5c880'
    }).then(function success(response) {
        $scope.people = response.data;
    }, function error(response) {
        console.log("Erro.");
    });


});