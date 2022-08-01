let a1 = { "one": 15, "two": 16, "five": 20 };

document.getElementById('but_1').onclick = () => {
    alert(a1.two)
}
document.querySelector
    ('.conteiner').innerHTML = a1.two;

let a2 = { "one": "hello", "two": "mahai", "five": "hi" };

document.getElementById('but_2').onclick = () => {
    alert(a2.five)
    console.log('five')
}
document.querySelector
    ('.conteiner_2').innerHTML = a2.five;
let me = 'five';
console.log(a2[me])

document.getElementById("but_3").onclick = () => {
    document.querySelector(".container_3").innerHTML = Object.entries(a2);
}











