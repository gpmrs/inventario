var inventaRio = angular.module('inventaRio', ["ngRoute"]);

inventaRio.config(function($routeProvider) {
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
});
