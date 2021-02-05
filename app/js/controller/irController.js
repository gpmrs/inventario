angular.module('inventaRio').controller('irController', function ($scope, $http) {

        $http({
            method: 'GET',
            url: 'https://api.unsplash.com/photos/random/?client_id=fWAJ3zvXJMwPjF4s_CRRvLqM0KVcKODMr3iNU_XjbaA'
        }).then(function success(response) {
            $scope.author = response["data"]["user"]["name"];
            $scope.link = response["data"]["links"]["html"];
            $('#head').css('background-image', 'url(' + response["data"]["urls"]["regular"] + ')');
        }, function error(response) {
            console.log("Erro.");
        });


});