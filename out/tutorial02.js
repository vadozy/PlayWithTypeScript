(function () {
    var superman = {
        realName: 'Vadim',
        superName: 'Storozhuk',
        print: function () { console.log(this.realName); },
        drive: function (car) { console.log("driving " + car); return {}; }
    };
    console.log(superman);
    superman.print();
    superman.drive('42');
})();
