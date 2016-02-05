require.config({
    paths: {
        "angular": "../bower_components/angular/angular",
        "angular-route": "../bower_components/angular-route/angular-route",
        "jquery": "../bower_components/jquery/dist/jquery"
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
require(["angular", "index"], function (angular) {
    angular.bootstrap(document, ["mainModule"]);
});
