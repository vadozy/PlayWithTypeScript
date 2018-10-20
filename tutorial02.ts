(function () {
    interface SuperHero {
        realName: String;
        superName: String;
        print: Function;
        drive(car: string): Object;
    }
    
    const superman: SuperHero = {
        realName: 'Vadim',
        superName: 'Storozhuk',
        print: function() {console.log(this.realName);},
        drive: function(car) {console.log(`driving ${car}`); return {};}
    }
    
    console.log(superman);
    superman.print();
    superman.drive('42');
})();
