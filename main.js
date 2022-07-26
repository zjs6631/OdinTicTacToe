console.log("JS connected");

const gameboard = (() =>{
    let currBoard = ["","","","","","","","",""];
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");



    one.addEventListener("click", ()=>{
        one.innerHTML = "X";
    })

    two.addEventListener("click", ()=>{
        two.innerHTML = "X";
    })

    three.addEventListener("click", ()=>{
        three.innerHTML = "X";
    })

    four.addEventListener("click", ()=>{
        four.innerHTML = "X";
    })

    five.addEventListener("click", ()=>{
        five.innerHTML = "X";
    })

    six.addEventListener("click", ()=>{
        six.innerHTML = "X";
    })

    seven.addEventListener("click", ()=>{
        seven.innerHTML = "X";
    })

    eight.addEventListener("click", ()=>{
        eight.innerHTML = "X";
    })

    nine.addEventListener("click", ()=>{
        nine.innerHTML = "X";
    })
})();