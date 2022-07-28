console.log("JS connected");

const Player = (name, mark) => {
    Player.name = name;
    Player.mark = mark;

    return {name, mark};
};

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



    
    
    


})();

const Game = (() => {
    //section handled player names and creation, assigning each a marker
    let p1name = "Zachary"
    let p2name = "Nancy"//prompt("enter player 2 name:")
    let p1nameDisplay = document.getElementById("p1name");
    let p2nameDisplay = document.getElementById("p2name");
    const Player1 = Player(p1name, "X");
    const Player2 = Player(p2name, "O");
    p1nameDisplay.innerHTML = ("Player 1: " + p1name);
    p2nameDisplay.innerHTML = ("Player 2: " + p2name);

    //grab each square of our board 
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");

    let flag = 0;
    let oneOpen = true;
    let twoOpen = true;
    let threeOpen = true;
    let fourOpen = true;
    let fiveOpen = true;
    let sixOpen = true;
    let sevenOpen = true;
    let eightOpen = true;
    let nineOpen = true;

    
    //add an event listener for each square
    one.addEventListener("click", ()=>{
        
        if(flag == 0 && oneOpen === true){
            one.innerHTML = Player1.mark;
            flag+=1;
            oneOpen = false;
        } else if (flag == 1 && oneOpen === true){
            one.innerHTML = Player2.mark;
            flag-=1;
            oneOpen = false;
        }
        console.log(oneOpen)
    })

    two.addEventListener("click", ()=>{
        if(flag == 0 && twoOpen === true){
            two.innerHTML = Player1.mark;
            flag+=1;
            twoOpen = false;
        } else if (flag == 1 && twoOpen === true){
            two.innerHTML = Player2.mark;
            flag-=1;
            twoOpen = false;
        }
    })
    
    three.addEventListener("click", ()=>{
        if(flag == 0 && threeOpen === true){
            three.innerHTML = Player1.mark;
            flag+=1;
            threeOpen = false;
        } else if (flag == 1 && threeOpen === true){
            three.innerHTML = Player2.mark;
            flag-=1;
            threeOpen = false;
        }
    })

    four.addEventListener("click", ()=>{
        if(flag == 0 && fourOpen === true){
            four.innerHTML = Player1.mark;
            flag+=1;
            fourOpen = false;
        } else if(flag == 1 && fourOpen == true){
            four.innerHTML = Player2.mark;
            flag-=1;
            fourOpen = false;
        }
    })

    five.addEventListener("click", ()=>{
        if(flag == 0 && fiveOpen === true){
            five.innerHTML = Player1.mark;
            flag+=1;
            fiveOpen = false;
        } else if (flag == 1 && fiveOpen === true) {
            five.innerHTML = Player2.mark;
            flag-=1;
            fiveOpen = false;
        }
    })

    six.addEventListener("click", ()=>{
        if(flag == 0 && sixOpen ===true){
            six.innerHTML = Player1.mark;
            flag+=1;
            sixOpen = false;
        } else if(flag == 1 && sixOpen === true){
            six.innerHTML = Player2.mark;
            flag-=1;
            sixOpen = false;
        }
    })

    seven.addEventListener("click", ()=>{
        if(flag == 0 && sevenOpen === true){
            seven.innerHTML = Player1.mark;
            flag+=1;
            sevenOpen = false;
        } else if(flag == 1 && sevenOpen === true){
            seven.innerHTML = Player2.mark;
            flag-=1;
            sevenOpen = false;
        }
    })

    eight.addEventListener("click", ()=>{
        if(flag == 0 && eightOpen === true){
            eight.innerHTML = Player1.mark;
            flag+=1;
            eightOpen = false;
        } else if(flag == 1 && eightOpen === true){
            eight.innerHTML = Player2.mark;
            flag-=1;
            eightOpen = false
        }
    })

    nine.addEventListener("click", ()=>{
        if(flag == 0 && nineOpen === true){
            nine.innerHTML = Player1.mark;
            flag+=1;
            nineOpen = false;
        } else if(flag == 1 && nineOpen === true){
            nine.innerHTML = Player2.mark;
            flag-=1;
            nineOpen = false;
        }
    })

    
    
    
    
    


    

})();