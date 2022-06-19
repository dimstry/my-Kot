function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  
  this.penumpangNaik = function(namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  
  this.penumpangTurun = function(namaPenumpang,bayar) {
    if( this.penumpang.length == 0) {
      alert('Penumpang kosong keneh mangg');
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        
        return penumpang;
      }
    }
  };
}

var angkot1 = new Angkot('Dimas',['Subang','Purwadadi'],[],0);
var angkot2 = new Angkot('Kresna',['Subang','Kalijati'],[],0);
