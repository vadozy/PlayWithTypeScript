(function () {
    
    const randVals = {x: 1, y: 2, z: 3};

    let {x, y, z} = randVals;

    console.log(`x = ${x}, y = ${y}, z = ${z}`);

    [x, y, z] = [z, y, x];
    console.log("x = " + x + ", y = " + y + ", z = " + z);

    const spread = (...arg) => {
        console.log(arg);
    };

    spread(1, 2, 3);

    enum Emotion {
        Happy = 42,
        Sad,
        Angry
    }

    const myFeeling = Emotion.Happy;
    
})();
