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