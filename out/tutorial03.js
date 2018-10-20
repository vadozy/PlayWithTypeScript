(function () {
    var math = function (n1, n2, n3) {
        if (n2 === void 0) { n2 = 2; }
        return n1 - n2 - (n3 === undefined ? 0 : n3);
    };
    console.log("math(5) = " + math(5));
    console.log("math(5, 1) = " + math(5, 1));
    console.log("math(5, 1, 3) = " + math(5, 1, 3));
    var math2 = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var sum = nums.reduce(function (a, b) { return a + b; }, 0);
        return sum;
    };
    console.log("math2(1, 2, 3, 4, 5) = " + math2(1, 2, 3, 4, 5));
})();
