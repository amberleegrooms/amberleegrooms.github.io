function whenSelectDogSize(dp1, dp2, dp3, sp1, sp2, sp3, mp1, mp2, mp3, lp1, lp2, lp3, xlp1, xlp2, xlp3) {
  var selectBox = document.getElementById("dog-size");
  var sizeValue = selectBox.options[selectBox.selectedIndex].text;
  var bathAndBrushPrice = dp1;
  var feetFaceFannyPrice = dp2;
  var fullGroomPrice = dp3;
  if (sizeValue == "Small") {
    bathAndBrushPrice = sp1;
    feetFaceFannyPrice = sp2;
    fullGroomPrice = sp3;
  } else if (sizeValue == "Medium") {
    bathAndBrushPrice = mp1;
    feetFaceFannyPrice = mp2;
    fullGroomPrice = mp3;
  } else if (sizeValue == "Large") {
    bathAndBrushPrice = lp1;
    feetFaceFannyPrice = lp2;
    fullGroomPrice = lp3;
  } else if (sizeValue == "X-Large") {
    bathAndBrushPrice = xlp1;
    feetFaceFannyPrice = xlp2;
    fullGroomPrice = xlp3;
  }
  document.getElementById("bathAndBrushPrice").innerHTML = bathAndBrushPrice;
  document.getElementById("feetFaceFannyPrice").innerHTML = feetFaceFannyPrice;
  document.getElementById("fullGroomPrice").innerHTML = fullGroomPrice;
}
