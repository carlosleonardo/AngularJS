import angular = require("angular");
import {Calc} from "./calc";
import $ = require("jquery");

class Aplicacao
{
    modulo:angular.IModule;
    public init(): void {
        this.modulo = angular.module("mainModule", []);
        this.modulo.controller("ctrl1",['$scope', ($scope)=>{
            $scope.nome = "Carlos";
        }])
    }

    public constructor()
    {
        var c = new Calc();
    }
}

// jquery
$(()=>{
    var app = new Aplicacao()
    app.init();
})
