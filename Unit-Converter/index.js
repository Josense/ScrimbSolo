const convertBtnEl = document.getElementById("convert-btn")
const convertInputEl = document.getElementById("convert-num")

const meterBoxEl = document.getElementById("meter-box")
const litersBoxEl = document.getElementById("liters-box")
const kilogramsBoxEl = document.getElementById("kilograms-box")

const meterToFeet = 3.28084
const feetToMeter = 0.3048
const litersToGallons = 0.2641720524
const gallonsToLiters = 3.785411784
const kilogramsToPounds = 2.2046226218
const poundsToKilograms = 0.45359237


convertBtnEl.addEventListener("click", function() {
    let num = Number(convertInputEl.value)
    if (num) {
        const meterResult = `${num} meters = ${(num * meterToFeet).toFixed(3)} feet | ${num} feet = ${(num * feetToMeter).toFixed(3)} meters`
        const litersResult = `${num} liters = ${(num * litersToGallons).toFixed(3)} gallons | ${num} gallons = ${(num * gallonsToLiters).toFixed(3)} liters`
        const kilogramsResult = `${num} kilos = ${(num * kilogramsToPounds).toFixed(3)} punds | ${num} pounds = ${(num * poundsToKilograms).toFixed(3)} kilos`
        renderConvertResult(meterResult, litersResult, kilogramsResult)
    } else {
        const result = `${convertInputEl.value} isn't a valid num, please retype a valid num ` 
        renderConvertResult(result, result, result)
    }
})

function renderConvertResult(meter, liters, kilograms) {
    meterBoxEl.innerText = meter
    litersBoxEl.innerText = liters
    kilogramsBoxEl.innerText = kilograms
}