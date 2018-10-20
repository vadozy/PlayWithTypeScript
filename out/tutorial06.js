(function () {
    var _a;
    var randVals = { x: 1, y: 2, z: 3 };
    var x = randVals.x, y = randVals.y, z = randVals.z;
    console.log("x = " + x + ", y = " + y + ", z = " + z);
    _a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
    console.log("x = " + x + ", y = " + y + ", z = " + z);
    var spread = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        console.log(arg);
    };
    spread(1, 2, 3);
    var Emotion;
    (function (Emotion) {
        Emotion[Emotion["Happy"] = 42] = "Happy";
        Emotion[Emotion["Sad"] = 43] = "Sad";
        Emotion[Emotion["Angry"] = 44] = "Angry";
    })(Emotion || (Emotion = {}));
    var myFeeling = Emotion.Happy;
})();
