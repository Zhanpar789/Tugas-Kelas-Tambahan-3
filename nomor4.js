// let array = ["Zhanpar", "Isman"]
// console.log(array[0]+" "+array[1]);

const nama = Array.prototype.map;
function manggil(namaAku) {
  const string = nama.call(namaAku, el => {
    return el
  })
  console.log(string.sort());
}

function Rapihin(text) {
  const potong = text.split("")
  console.log(potong);
}
Rapihin("Zhanpar");
Rapihin("Isman");