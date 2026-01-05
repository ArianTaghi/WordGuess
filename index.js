let max = 101;
let min = 1;
let mid = 50;
let alert = 0;
const biggerBtn = document.getElementById("Bigger");
const lowerBtn = document.getElementById("Lower");
const theLabel = document.getElementById("number");
const yesBtn = document.getElementById("YesBtn");
const letsgoBtn = document.getElementById("letsgoBtn");
const readyLabel = document.getElementById("readyLabel");
const finalLabel = document.getElementById("finalLabel");

biggerBtn.style.display = "none";
yesBtn.style.display = "none";
lowerBtn.style.display = "none";
finalLabel.style.display = "none";


letsgoBtn.onclick = function() {
    biggerBtn.style.display = "inline-block";
    yesBtn.style.display = "inline-block";
    lowerBtn.style.display = "inline-block";
    letsgoBtn.style.display = "none";
    readyLabel.style.display = "none";
    theLabel.textContent = "is your number 50?";
}

biggerBtn.onclick = function() {
    min = mid;
    mid = Math.trunc((max + min) / 2);
      theLabel.textContent = `is your number  ${mid}?`;
    alert++;
    if (alert > 6) {
        theLabel.textContent = "Liar!";
    biggerBtn.style.display = "none";
    yesBtn.style.display = "none";
    lowerBtn.style.display = "none";
    }
}
lowerBtn.onclick = function() {
    max = mid;
    mid = Math.trunc((max + min) / 2);
    theLabel.textContent = `is your number  ${mid}?`;
    alert++;
    if (alert > 6) {
        theLabel.textContent = "Liar!";
        biggerBtn.style.display = "none";
        yesBtn.style.display = "none";
        lowerBtn.style.display = "none";
    }
}
yesBtn.onclick = function() {
    theLabel.textContent = `Found it!Your number is ${mid}`;
    finalLabel.style.display = "inline-block";
    biggerBtn.style.display = "none";
    yesBtn.style.display = "none";
    lowerBtn.style.display = "none";
}
