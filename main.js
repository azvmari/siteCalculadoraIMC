document.getElementById("form-calculate-imc").addEventListener("submit", calculateIMC)

function toggleMenu() {
  const menu = document.getElementById("menu-expansivo")
  if (menu.className === "open"){
    menu.className = ""
  }
  else {
    menu.className = "open"
  }
}

function calculateIMC(event){
  event.preventDefault()

  const inputWeight = document.getElementById("input-weight")
  const inputHeight = document.getElementById("input-height")
  const resultText = document.getElementById("result-text")

  const weight = parseFloat(inputWeight.value)
  const height = parseFloat(inputHeight.value)

  if(isNaN(weight) || isNaN(height)) {
    resultText.innerText = ""
  }

  const result = weight / (height * height)
  let classification = ""

  if(result < 18.5) {
    classification = "abaixo do peso"
  } else if(result < 25) {
    classification = "com peso normal"
  } else if(result < 30) {
    classification = "em sobrepeso"
  } else if(result < 35) {
    classification = "em obesidade grau 1"
  } else if(result < 40){
    classification = "em obesidade grau 2"
  } else {
    classification = "em obesidade grau 3"
  }

  resultText.innerText = `Seu IMC é ${result.toFixed(1)}. Você está ${classification}`
}