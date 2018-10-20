(function () {
    function GetType(val, val2) {
        return "typeof(val) = " + typeof (val) + ", typeof(val2) = " + typeof (val2);
    }
    console.log(GetType(42));
    console.log(GetType('42'));
    console.log(GetType(42, '42'));
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var aNumber = new GenericNumber();
    aNumber.add = function (x, y) { return x + y; };
    console.log("aNumber.add(2, 3) = " + aNumber.add(2, 3));
    var notNumber = new GenericNumber();
    notNumber.add = function (x, y) { return x + ' ' + y; };
    console.log("notNumber.add('2', '3') = " + notNumber.add('2', '3'));
})();
