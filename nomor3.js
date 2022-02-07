function kesehatan(darah) {
  if (darah >= 100) {
    console.log("Ur Fine");
  }
  else if (darah >= 50 && darah < 100) {
    console.log("Be Carefull");
  }
  else if (darah < 50) {
    console.log("You Need Heal");
  }
}
kesehatan(49);