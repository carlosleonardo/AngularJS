define(["require", "exports"], function (require, exports) {
    "use strict";
    var Calc = (function () {
        function Calc() {
        }
        Calc.prototype.soma = function (a, b) {
            return (a + b);
        };
        Calc.prototype.subtracao = function (a, b) {
            return (a - b);
        };
        Calc.prototype.multiplicacao = function (a, b) {
            return (a * b);
        };
        Calc.prototype.divisao = function (a, b) {
            if (!b) {
                throw new Error("Divisão por 0!");
            }
            return (a / b);
        };
        return Calc;
    }());
    exports.Calc = Calc;
});
