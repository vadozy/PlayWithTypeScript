(function() {
    const math = (n1: number, n2:number = 2, n3?:number) => {
        return n1 - n2 - (n3 === undefined ? 0 : n3);
    };

    console.log(`math(5) = ${math(5)}`);
    console.log(`math(5, 1) = ${math(5, 1)}`);
    console.log(`math(5, 1, 3) = ${math(5, 1, 3)}`);

    const math2 = (...nums: number[]) => {
        const sum = nums.reduce((a, b) => a + b, 0);
        return sum;
    };

    console.log(`math2(1, 2, 3, 4, 5) = ${math2(1, 2, 3, 4, 5)}`)
})();

