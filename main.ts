/// <reference path="./typings/requirejs/require.d.ts"/>

// Configuração de libs não-AMD(Asyncronous Module Loading). Nada a ver com aquela empresa ;).
require.config({
    paths: {
        "angular": "../bower_components/angular/angular",
        "angular-route" : "../bower_components/angular-route/angular-route",
        "jquery" : "../bower_components/jquery/dist/jquery"
    },
    shim: {
        "angular": {
           exports: "angular"
       },
       "angular-route": {
           deps: ["angular"]
       }
    }
});

// Requirejs usa nomes de arquivo, angular, nomes de módulo
require(["angular", "index"], (angular:ng.IAngularStatic)=> {
    angular.bootstrap(document, ["mainModule"]);
});
