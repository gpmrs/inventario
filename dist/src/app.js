var inventaRio = angular.module('inventaRio', ["ngRoute"]);

inventaRio.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl : "app/templates/views/homeContainer.html",
            controller: "blogController"
        })
        .when("/sobre", {
            templateUrl : "app/templates/views/aboutContainer.html",
            controller: "aboutController"
        })
        .when("/busca", {
            templateUrl : "templates/views/searchContainer.html"
        })
        .when("/cadastro", {
            templateUrl : "templates/views/cadastroContainer.html"
        })
        .when("/contato", {
            templateUrl : "templates/views/contatoContainer.html"
        });
}]);

angular.module('inventaRio').controller('aboutController', ["$scope", "$http", function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'https://my.api.mockaroo.com/people.json?key=3ef5c880'
    }).then(function success(response) {
        $scope.people = response.data;
    }, function error(response) {
        console.log("Erro.");
    });


}]);
angular.module('inventaRio').controller('blogController', ["$scope", "$http", function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'https://my.api.mockaroo.com/invblog.json?key=3ef5c880'
    }).then(function success(response) {
        $scope.articles = response.data;
    }, function error(response) {
        console.log("Erro.");
    });


}]);

angular.module('inventaRio').controller('irController', ["$scope", "$http", function ($scope, $http) {

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


}]);
angular.module('inventaRio').controller('productListController', ["$scope", "$http", function ($scope, $http) {



}]);
angular.module('inventaRio').factory("Product", function() {

    var Product = function() {
        var self = this;
        this.deep_copy_whitelist = [
            "productName", "price", "location", "description"
        ]
        this.productName = "";
        this.price = 0;
        this.location = "";
        this.description = "";
    }

    return Product;
});
angular.module('inventaRio').factory("Seller", function() {

    var Seller = function() {
        var self = this;
        this.deep_copy_whitelist = [
            "sellerName", "sellerLocation", "sellerDescription"
        ]
        this.sellerName = "";
        this.sellerLocation = "";
        this.sellerDescription = "";
    }

    return Seller;
});
angular.module('inventaRio').directive("productContainer", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/model/productContainer.html'
    }
})
angular.module('inventaRio').directive("sellerContainer", function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/model/sellerContainer.html'
    }
})