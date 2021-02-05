var inventaRio = angular.module('inventaRio', []);

inventaRio.constant('appInfo', {
    appName: "inventario",
    version: "1.0.0"
});

inventaRio.constant('appMode', {
    HOMEPAGE: '0',
    INFO: '1',
    FIND: '2',
    JOIN: '3',
    CONTACT: '4',
});

inventaRio.constatnt('findMode', {
    SHOWRESULTS: 5
});
angular.module('inventaRio', []).controller('headerController', ["$scope", "$http", function ($scope, $http) {

}]);
angular.module('inventaRio', []).controller('irController', ["$scope", "$http", function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://api.unsplash.com/photos/random/?client_id=fWAJ3zvXJMwPjF4s_CRRvLqM0KVcKODMr3iNU_XjbaA'
    }).then(function success(response) {
        $scope.author = response["data"]["user"]["name"];
        $scope.link = response["data"]["links"]["html"];
        $('#head').css('background-image','url(' + response["data"]["urls"]["regular"] + ')');
    }, function error(response) {
        console.log("Erro");
    });

    $scope.navbar_options = [
        {
            "text": "home"
        },
        {
            "text": "inventario"
        },
        {
            "text": "encontre"
        },
        {
            "text": "colabore"
        },
        {
            "text": "contato"
        }
    ];


}]);