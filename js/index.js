define(["require", "exports", "angular", "./calc", "jquery"], function (require, exports, angular, calc_1, $) {
    "use strict";
    var Aplicacao = (function () {
        function Aplicacao() {
            var c = new calc_1.Calc();
        }
        Aplicacao.prototype.init = function () {
            this.modulo = angular.module("mainModule", []);
            this.modulo.controller("ctrl1", ['$scope', function ($scope) {
                    $scope.nome = "Carlos";
                }]);
        };
        return Aplicacao;
    }());
    $(function () {
        var app = new Aplicacao();
        app.init();
    });
});
