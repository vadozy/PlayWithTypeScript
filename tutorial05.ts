(function () {
    function GetType<T, X>(val: T, val2?: X): string {
        return `typeof(val) = ${typeof(val)}, typeof(val2) = ${typeof(val2)}`;
    }
    console.log(GetType(42));
    console.log(GetType('42'));
    console.log(GetType(42, '42'));

    class GenericNumber<T> {
        add: (val1: T, val2: T) => T;
    }

    const aNumber = new GenericNumber<number>();
    aNumber.add = (x, y) => x + y;
    console.log(`aNumber.add(2, 3) = ${aNumber.add(2, 3)}`);

    const notNumber = new GenericNumber<string>();
    notNumber.add = (x, y) => x + ' ' + y;
    console.log(`notNumber.add('2', '3') = ${notNumber.add('2', '3')}`);
    
})();
