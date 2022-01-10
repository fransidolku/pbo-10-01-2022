class Kue {
  constructor(gula, asesoris, berat) {
    this._bahan = 'tepung';
    this._gula = gula;
    this._asesoris = asesoris;
    this._berat = berat;
  }
  // GETTER

  get bahan() {
    return this._bahan;
  }

  get gula() {
    return this._gula;
  }

  get asesoris() {
    return this._asesoris;
  }
  get berat() {
    return this._berat;
  }

  // SETTER
  set gula(gula) {
    this._gula = gula;
  }
  set asesoris(val) {
    this._asesoris = val;
  }
  set berat(val) {
    this._berat = val;
  }
}
// object
// const kueputu = new Kue ("gulajawa" ,"daun" ,"10");
// console.log(kueputu);

class KuePutu extends Kue {
  constructor(gulaLevel, ...asep) {
    super(...asep);
    this._gulaLevel = gulaLevel;
  }
  //getter
  get gulaLevel() {
    return this._gulaLevel;
  }
  //  setter
  set gulaLevel(val) {
    this._gulaLevel = val;
  }
}

class KueCubit extends Kue {
    constructor(gulaLevel, ...asep) {
        super(...asep);
        this._gulaLevel = gulaLevel;
        this._bahan = ["tepung","telur"];
      }
      //getter
      get gulaLevel() {
        return this._gulaLevel;
      }
      //  setter
      set gulaLevel(val) {
        this._gulaLevel = val;
      }
    }

class KueKetawa extends Kue {
  cconstructor(gulaLevel, ...asep) {
    super(...asep);
    this._gulaLevel = gulaLevel;
    this._bahan = ["tepung","telur"];
  }
  //getter
  get gulaLevel() {
    return this._gulaLevel;
  }
  //  setter
  set gulaLevel(val) {
    this._gulaLevel = val;
  }
}

const kueputuasep = new KuePutu ("gulaLevel" ,"gula" ,"kelapa",10);
console.log(kueputuasep);