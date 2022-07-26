console.log("JS connected");

const Player = (name, mark) => {
    Player.name = name;
    Player.mark = mark;

    

    return {name, mark};
}

const Gameboard = (() =>{
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
    one.innerHTML = Player.mark;
    currBoard[0] = Player.mark;    
    })

    two.addEventListener("click", ()=>{
    two.innerHTML = Player.mark;
    currBoard[1] = Player.mark
    })
    
    three.addEventListener("click", ()=>{
    three.innerHTML = Player.mark;
    currBoard[2] = Player.mark
    })

    four.addEventListener("click", ()=>{
        four.innerHTML = Player.mark;
        currBoard[3] = Player.mark;
    })

    five.addEventListener("click", ()=>{
        five.innerHTML = Player.mark;
        currBoard[4] = Player.mark;
    })

    six.addEventListener("click", ()=>{
        six.innerHTML = Player.mark;
        currBoard[5] = Player.mark;
    })

    seven.addEventListener("click", ()=>{
        seven.innerHTML = Player.mark;
        currBoard[6] = Player.mark;
    })

    eight.addEventListener("click", ()=>{
        eight.innerHTML = Player.mark;
        currBoard[7] = Player.mark;
    })

    nine.addEventListener("click", ()=>{
        nine.innerHTML = Player.mark;
        currBoard[8] = Player.mark;
    })
})();

const Game = (() => {
    let p1name = prompt("enter player 1 name:")
    let p2name = prompt("enter player 2 name:")
    let p1nameDisplay = document.getElementById("p1name");
    let p2nameDisplay = document.getElementById("p2name");
    
    const Player1 = Player(p1name, "X");
    const Player2 = Player(p2name, "O");
    
    p1nameDisplay.innerHTML = ("Player 1: " + p1name);
    p2nameDisplay.innerHTML = ("Player 2: " + p2name);
    
    let currMove = 0;
    let moveCount = 0;



    

})();