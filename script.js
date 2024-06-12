let tries = 0
let body = document.getElementById("body");
console.log(body.style.backgroundImage.replace(1, 2))

let yesBtn = document.querySelector("#yes")
let questionP = document.querySelector("#question")
yesBtn.style.width = "200px"
yesBtn.style.height = "50px"
yesBtn.style.fontSize = "18px"
let currentUrl = window.location.href;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
document.querySelector("#no").addEventListener("click", function () {
  tries++
  if (tries > 7) {
    console.log("end")
    this.style.display = "none"
  } else if (tries == 6) {
    yesBtn.style.width = `${parseFloat(yesBtn.style.width) + 500}px`
    yesBtn.style.height = `${parseFloat(yesBtn.style.height) + 500}px`
    yesBtn.style.fontSize = `${parseFloat(yesBtn.style.fontSize) + 5}px`
    body.style.backgroundImage = body.style.backgroundImage.replace(tries, tries + 1)
    this.style.position = "absolute";
    let posX = getRandomArbitrary(0, 425 - 100)
    let posY = getRandomArbitrary(0, 905)

    this.style.top = posY + "px";
    this.style.left = posX + "px";
  }
  else {
    if (tries == 1) {
      questionP.innerText = "Certeza que não quer?"
    } else if (tries == 2) {
      questionP.innerText = "Mas como cê sabe ??"
    }
    else if (tries == 3) {
      questionP.innerText = "Certeza mesmo disso ???"
    }
    else if (tries == 4) {
      questionP.innerText = "Pense Denovo ... "
    }
    else if (tries == 5) {
      questionP.innerText = "Certeza? "
    }
    else if (tries == 7) {
      questionP.innerText = "Bixo ?????"
    }
    else {
      questionP.innerText = questionP.innerText + "?"
    }
    yesBtn.style.width = `${parseFloat(yesBtn.style.width) + 70}px`
    yesBtn.style.height = `${parseFloat(yesBtn.style.height) + 30}px`
    yesBtn.style.fontSize = `${parseFloat(yesBtn.style.fontSize) + 5}px`
    body.style.backgroundImage = body.style.backgroundImage.replace(tries, tries + 1)
    this.style.position = "absolute";
    let posX = getRandomArbitrary(0, 425 - 100)
    let posY = getRandomArbitrary(0, 905)

    this.style.top = posY + "px";
    this.style.left = posX + "px";
  }

});
document.querySelector("#yes").addEventListener("click", function () {
  tries++
  if (tries > 7) {
    console.log("end")
    window.location.replace(currentUrl+"surprise.html");
  }
  else {
  
  }

});
