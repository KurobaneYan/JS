{
function Kingdom(kingdomName, isSimple, isAutotroph) {
    this.kingdomName = kingdomName;
    this.isSimple = isSimple;
    this.isAutotroph = isAutotroph;
}; 

Kingdom.prototype.getKingdom = function () {
    return this.name;
};

Kingdom.prototype.getInfo = function () {
    return 'Kingdom: ' + this.kingdomName + '\nis Simple: ' + this.isSimple + '\nis Autotroph: ' + this.isAutotroph;
};

function Class(kingdomName, isSimple, isAutotroph, className) {
    Kingdom.apply(this, arguments);

    this.className = className;
};

Class.prototype = Object.create(Kingdom.prototype);
Class.prototype.constructor = Class;

Class.prototype.getInfo = function () {
    return Kingdom.prototype.getInfo.call(this) + '\nClass: ' + this.className;
};

function Species(kingdomName, isSimple, isAutotroph, className, speciesName, range, isPredator) {
    Class.apply(this, arguments);

    this.speciesName = speciesName;
    this.range = range;
    let lifeSpan;
    this.isPredator = isPredator;
};

Species.prototype = Object.create(Class.prototype);
Species.prototype.constructor = Species;

Species.prototype.getSpecies = function () {
    return this.speciesName;
};

Species.prototype.setLifeSpan = function (newLifeSpan) {
    lifeSpan = newLifeSpan;
};
Species.prototype.getLifeSpan = function () {
    return lifeSpan;
};
Species.prototype.getInfo = function () {
    return Class.prototype.getInfo.call(this) + '\nSpecies: ' + this.speciesName + '\nRange: ' + this.range + '\nLifeSpan: ' + this.getLifeSpan() + ' years\nIS predator: ' + this.isPredator;
};

let animalla = new Kingdom('Animalla', false, false);

let malacostraca = new Class('Animalla', false, false, 'Malacostraca');

let pagurusBernhardus = new Species('Animalla', false, false, 'Malacostraca', 'Pagurus Bernhardus', 'Rocky and sandy areas', false);

pagurusBernhardus.setLifeSpan(11);
console.log(pagurusBernhardus.getInfo());
}
