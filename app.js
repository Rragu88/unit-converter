const numInput = document.getElementById('convert-num');
const convertBtn = document.getElementById('convert-btn');
const lengthCalc = document.getElementById('length-calc');
const volumeCalc = document.getElementById('volume-calc');
const massCalc = document.getElementById('mass-calc');
let result = 0;

function multiply(num, multiplyBy) {
    result = (num * multiplyBy).toFixed(3);
    return result;
}

function divide(num, divideBy) {
    result = (num / divideBy).toFixed(3);
    return result;
}


function render(num) {
    const metersToFeet = multiply(numInput.value, 3.2808);
    const feetToMeters = divide(numInput.value, 3.2808);
    const litersToGallons = multiply(numInput.value, 0.264172);
    const gallonsToLiters = divide(numInput.value, 3.78541253);
    const kilosToPounds = multiply(numInput.value, 2.2046);
    const poundsToKilos = divide(numInput.value, 2.2046);

    lengthCalc.textContent = `${num} meters = ${metersToFeet} feet | ${num} feet = ${feetToMeters} meters`;
    volumeCalc.textContent = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`;
    massCalc.textContent = `${num} kilos = ${kilosToPounds} pounds | ${num} pounds = ${poundsToKilos} kilos`;
}

convertBtn.addEventListener('click', () => {
    render(numInput.value);
});