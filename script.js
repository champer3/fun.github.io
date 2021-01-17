function ageInput() {
    var birthYear = document.getElementById("ageInput").value;
    var ageInSeconds = (2020 - birthYear) * 31536000;
    document.getElementById("didi").innerHTML = ageInSeconds +
    " seconds eeehh, Talo sope ko por ke";
    document.getElementById("didi").style.fontSize = "50px"
}



