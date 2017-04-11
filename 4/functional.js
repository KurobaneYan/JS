function Kingdom(kingdomName, isSimple, isAutotroph) {
    this.kingdomName = kingdomName;
    this.isSimple = isSimple;
    this.isAutotroph = isAutotroph;
    
    this.getKingdom = function () {
        return this.name;
    };
    this.getInfo = function () {
        return 'Kingdom: ' + this.kingdomName + '\nis Simple: ' + this.isSimple + '\nis Autotroph: ' + this.isAutotroph;
    };
};

function Class(kingdomName, isSimple, isAutotroph, className) {
    Kingdom.apply(this, arguments);

    this.className = className;

    let parentInfo = this.getInfo;
    this.getInfo = function () {
        return parentInfo.call(this) + '\nClass: ' + this.className;
    };
    
};

function Species(kingdomName, isSimple, isAutotroph, className, speciesName, range, isPredator) {
    Class.apply(this, arguments);

    this.speciesName = speciesName;
    this.range = range;
    let lifeSpan;
    this.isPredator = isPredator;

    this.getSpecies = function () {
        return this.speciesName;
    };
    this.setLifeSpan = function (newLifeSpan) {
        lifeSpan = newLifeSpan;
    };
    this.getLifeSpan = function () {
        return lifeSpan;
    };

    let parentInfo = this.getInfo;
    this.getInfo = function () {
        return parentInfo.call(this) + '\nSpecies: ' + this.speciesName + '\nRange: ' + this.range + '\nLifeSpan: ' + this.getLifeSpan() + ' years\nIS predator: ' + this.isPredator;
    }
};

let animalla = new Kingdom('Animalla', false, false);

let malacostraca = new Class('Animalla', false, false, 'Malacostraca');

let pagurusBernhardus = new Species('Animalla', false, false, 'Malacostraca', 'Pagurus Bernhardus', 'Rocky and sandy areas', false);

pagurusBernhardus.setLifeSpan(11);
console.log(pagurusBernhardus.getInfo());
