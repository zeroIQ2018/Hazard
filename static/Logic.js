var choice;
var amount;
var amount2;
var y = Math.random();
if (y < 0.5){
    y = 0;
    }
    else {
    y = 1;
    }


function buttondisable(){
    document.getElementById("btn0").disabled=true;
    document.getElementById("btn1").disabled=true;
}

while(true){
    document.getElementById("z").innerHTML = clickcount;
}

function clickCounter(amount) {
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+amount;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("z").innerHTML = "Du hast " + sessionStorage.clickcount + " Punkte";
    } else {
      document.getElementById("z").innerHTML = "Dein Browser unterstützt locale speicherung nicht";
    }
  }

  function clickCounter2(amount2) {
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount2) {
        sessionStorage.clickcount2 = Number(sessionStorage.clickcount2)+amount2;
      } else {
        sessionStorage.clickcount2 = 1;
      }
      document.getElementById("x").innerHTML = "Der Gegner " + sessionStorage.clickcount2 + " Punkte";
    } else {
      document.getElementById("x").innerHTML = "Dein Browser unterstützt locale speicherung nicht";
    }
  }





function clickFunction(choice){
    console.log(choice);
    switch (typeof choice !== 'undefined') {
        case (choice === 1 && y === 1):
            console.log("11");
            document.getElementById("3").innerHTML = "beide sterben";
            buttondisable();
            clickCounter(-3);
            clickCounter2(-3); 
            break;
    
        case (choice === 0 && y === 0):
            console.log("00");
            document.getElementById("3").innerHTML = "Beide entkommen den Tod";
            buttondisable();
            clickCounter(1);
            clickCounter2(1);
            break;
    
        case (choice === 1 && y === 0):
            console.log("10");
            document.getElementById("3").innerHTML = "Gegner versucht auszuweichen. Spieler fährt weiter. Spieler gewinnt";
            buttondisable();
            clickCounter(2);
            clickCounter2(-1);
            break;
    
        case (choice === 0 && y === 1):
            console.log("01");
            document.getElementById("3").innerHTML = "Spieler versucht auszuweichen. Gegner fährt weiter. Gegner gewinnt";
            buttondisable();
            clickCounter(-1);
            clickCounter2(2);
            break;     
        
        default:
            document.getElementById("3").innerHTML = ":/";
            buttondisable();
            clickCounter();
            break
    
    }
} 





console.log(y);
console.log(choice);
console.log(typeof(y));
console.log(typeof(choice));


