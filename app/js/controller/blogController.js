angular.module('inventaRio').controller('blogController', function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'https://my.api.mockaroo.com/invblog.json?key=3ef5c880'
    }).then(function success(response) {
        $scope.articles = response.data;
    }, function error(response) {
        console.log("Erro.");
    });


});