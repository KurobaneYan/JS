{
class Kingdom {
    constructor(kingdomName, isSimple, isAutotroph) {
        this.kingdomName = kingdomName;
        this.isSimple = isSimple;
        this.isAutotroph = isAutotroph;
    }

    getKingdom() {
        return this.name;
    }
    getInfo() {
        return 'Kingdom: ' + this.kingdomName + '\nis Simple: ' + this.isSimple + '\nis Autotroph: ' + this.isAutotroph;
    }
}

class Class extends Kingdom {
    constructor(kingdomName, isSimple, isAutotroph, className) {
        super(kingdomName, isSimple, isAutotroph); 
        this.className = className;
    }

    getInfo() {
        return super.getInfo() + '\nClass: ' + this.className;
    }
    
}

class Species extends Class {
    constructor(kingdomName, isSimple, isAutotroph, className, speciesName, range, isPredator) {
        super(kingdomName, isSimple, isAutotroph, className);
        this.speciesName = speciesName;
        this.range = range;
        let lifeSpan;
        this.isPredator = isPredator;
    }

    getSpecies() {
        return this.speciesName;
    }
    setLifeSpan(newLifeSpan) {
        lifeSpan = newLifeSpan;
    }
    getLifeSpan() {
        return lifeSpan;
    }

    getInfo() {
        return super.getInfo() + '\nSpecies: ' + this.speciesName + '\nRange: ' + this.range + '\nLifeSpan: ' + this.getLifeSpan() + ' years\nIS predator: ' + this.isPredator;
    }
}

let animalla = new Kingdom('Animalla', false, false);

let malacostraca = new Class('Animalla', false, false, 'Malacostraca');

let pagurusBernhardus = new Species('Animalla', false, false, 'Malacostraca', 'Pagurus Bernhardus', 'Rocky and sandy areas', false);

pagurusBernhardus.setLifeSpan(11);
console.log(pagurusBernhardus.getInfo());
}
