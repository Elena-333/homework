document.querySelector('#btn')
addEventListener('dblclick', function () {
    alert("good")
})

function testFunction() {
    let x = document.getElementById("testInput").value;
    document.getElementById("txt").innerHTML = "Ваш текст: " + x;
}



function animalsFunction() {
    let z = document.getElementById("animals").value;
    document.getElementById("info_2").innerHTML = "Вы выбрали: " + z;
}
function blurFunction() {
    document.getElementById("onf").style.background = "orange";
}
function focusFunction() {
    document.getElementById("onf").style.background = "blue";
}
const keyBoard = document.querySelector('.keyBoard')
keyBoard.addEventListener("keydown", e => {
    console.log("e")
})