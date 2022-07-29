console.log("JS connected");


//player factory to create player objects
const Player = (name, mark) => {
    Player.name = name;
    Player.mark = mark;

    return {name, mark};
};


//gameboard module to hold current board and check for wins and ties 
const Gameboard = (() =>{
    let currBoard = ["1","2","3","4","5","6","7","8","9"];
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");

    
    //need main function to get values at each square and place them in array
    //checkWin function to check different winning combinations or ties 
    //1 2 3   [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
    //4 5 6
    //7 8 9
    const updateBoard = () => {
        currBoard[0] = one.innerHTML;
        currBoard[1] = two.innerHTML;
        currBoard[2] = three.innerHTML;
        currBoard[3] = four.innerHTML;
        currBoard[4] = five.innerHTML;
        currBoard[5] = six.innerHTML;
        currBoard[6] = seven.innerHTML;
        currBoard[7] = eight.innerHTML;
        currBoard[8] = nine.innerHTML;
        
        console.log(currBoard);
    }

    let win = false;
    
    //checkWin checks every possible combination and makes sure it's not a row of "" 
    //returns a boolean to mark if a win was detected
    const checkWin = () => {
        if((currBoard[0] == currBoard[1] && currBoard[1] == currBoard[2] && currBoard[0] != "")|| (currBoard[3] == currBoard[4] && currBoard[4] == currBoard[5] && currBoard[3] != "")||
        (currBoard[6] == currBoard[7] && currBoard[7] == currBoard[8] && currBoard[6] != "") || (currBoard[0] == currBoard[3] && currBoard[3] == currBoard[6] && currBoard[0] != "") ||
        (currBoard[1] == currBoard[4] && currBoard[4] == currBoard[7] && currBoard[1] != "") || (currBoard[2] == currBoard[5] && currBoard[5] == currBoard[8] && currBoard[2] != "") ||
        (currBoard[0] == currBoard[4] && currBoard[4] == currBoard[8] && currBoard[0] != "") || (currBoard[2] == currBoard[4] && currBoard[4] == currBoard[6] && currBoard[2] != "")){
            win = true;
        }
        return win;
    }

    //resetBoard sets win to false and removes all characters from board
    //as well as emptying out the array that represents the gameboard
    const resetBoard = (a) => {
        win = a;
        one.innerHTML = "",
        two.innerHTML = "",
        three.innerHTML = "",
        four.innerHTML = "",
        five.innerHTML = "",
        six.innerHTML = "",
        seven.innerHTML = "",
        eight.innerHTML = "",
        nine.innerHTML = "";

        currBoard["", "", "", "", "", "", "", "", ""];
    }

    //I return all the functions so they can be used elsewhere
    return{
        updateBoard, checkWin, resetBoard
    }
    
    
    


})();

//game module to manage game flow
const Game = (() => {
    //section handled player names and creation, assigning each a marker
    let p1name = "Zachary"
    let p2name = "Nancy"//prompt("enter player 2 name:")
    let p1nameDisplay = document.getElementById("p1name");
    let p2nameDisplay = document.getElementById("p2name");
    let p1WinDisplay = document.getElementById("player1");
    let p2WinDisplay = document.getElementById("player2");
    const Player1 = Player(p1name, "X");
    const Player2 = Player(p2name, "O");
    p1nameDisplay.innerHTML = ("Player 1: " + p1name);
    p2nameDisplay.innerHTML = ("Player 2: " + p2name);
    p1Wins = 0;
    p2Wins = 0;

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

    //flag used to keep track of whos turn it is
    //open flags used to check if tile is still avaiable to play
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
    
    let winCounted = false;

    
    //add an event listener for each square
    one.addEventListener("click", ()=>{
        //using flag variable allow the proper player place their mark
        //mark the tile as taken
        if(flag == 0 && oneOpen === true){
            one.innerHTML = Player1.mark;
            flag+=1;
            oneOpen = false;
        } else if (flag == 1 && oneOpen === true){
            one.innerHTML = Player2.mark;
            flag-=1;
            oneOpen = false;
        }
        //update the gameboard (updates the array)
        Gameboard.updateBoard();
        //check the array for a winning combination
        let res = Gameboard.checkWin();
        //if win is detected then disable the board and name the last player the winner
        //increment their win counter, mark the win as counted to prevent double counting. 
        if(res === true){
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted === false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
                } else if (flag == 1 && winCounted === false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


        }
        
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
        Gameboard.updateBoard();
        let res = Gameboard.checkWin();
        if(res === true){
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted == false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
            } else if (flag == 1 && winCounted === false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


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
        Gameboard.updateBoard();
        let res = Gameboard.checkWin();
        if(res === true){
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted === false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
            } else if (flag == 1 && winCounted === false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


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
        
        Gameboard.updateBoard();
        let res = Gameboard.checkWin();
        if(res === true){
            
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted === false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
            } else if (flag == 1 && winCounted === false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


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
        Gameboard.updateBoard();
        let res = Gameboard.checkWin();
        if(res === true){
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted === false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
            } else if (flag == 1 && winCounted === false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


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
        Gameboard.updateBoard();
        let res = Gameboard.checkWin();
        if(res === true){
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted === false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
            } else if (flag == 1 && winCounted == false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


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
        Gameboard.updateBoard();
        let res = Gameboard.checkWin();
        if(res === true){
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted === false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
            } else if (flag == 1 && winCounted === false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


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
        Gameboard.updateBoard();
        let res = Gameboard.checkWin();
        if(res === true){
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted === false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
            } else if (flag == 1 && winCounted === false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


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
        Gameboard.updateBoard();
        let res = Gameboard.checkWin();
        if(res === true){
            oneOpen = false;
            twoOpen = false;
            threeOpen = false;
            fourOpen = false;
            fiveOpen = false;
            sixOpen = false;
            sevenOpen = false;
            eightOpen = false;
            nineOpen = false;
            if(flag == 0 && winCounted === false){
                p2Wins+=1;
                p2WinDisplay.innerHTML = "Wins: " + p2Wins;
                winCounted = true;
            } else if (flag == 1 && winCounted === false){
                p1Wins+=1;
                p1WinDisplay.innerHTML = "Wins: " + p1Wins;
                winCounted = true;
            }


        }
    })

    const clearBoard = document.getElementById("clearBoard");
    const clearCounter = document.getElementById("clearCounter");
    //listener to allow the clear board button to work
    //Gameboard.resetBoard() does the actual reset. This button marks the tiles as open for another move.
    clearBoard.addEventListener("click", () =>{
        Gameboard.resetBoard(false);
        oneOpen = true;
        twoOpen = true;
        threeOpen = true;
        fourOpen = true;
        fiveOpen = true;
        sixOpen = true;
        sevenOpen = true;
        eightOpen = true;
        nineOpen = true;
        winCounted = false;
    })
    //clear counter resets the counter variables and updates the HTML
    //also updates the winCounted variable to allow the next game to function properly.
    clearCounter.addEventListener("click", () =>{
        p1Wins = 0;
        p2Wins = 0;
        p1WinDisplay.innerHTML = "Wins: " + p1Wins;
        p2WinDisplay.innerHTML = "Wins: " + p2Wins;
        winCounted = false;

    })

    
    
    
    
    


    

})();