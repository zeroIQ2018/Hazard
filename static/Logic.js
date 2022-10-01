function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

//write the choice of the player i forgor how????? why tf is the element with id "3" the one with 
var choice;


function clickFunction(choice){
    console.log(choice)
} 



// does the choice for the enemy 
// its literally just 1 or 0

var y = Math.random();
if (y < 0.5){
y = 0
}
else {
y = 1
}



console.log(y);
console.log(choice);
console.log(typeof(y));
console.log(typeof(choice));

// if statment
// or should i use switch statements
//does it only check at the start or should i use a loop??????

function ifs(){
sleep(500,);
switch (typeof choice != 'undefined') {
    case (choice == 1 && y == 1):
        console.log("11");
        document.getElementById("3").innerHTML = "beide sterben";
        break;

    case (choice == 0 && y == 0):
        console.log("00");
        document.getElementById("3").innerHTML = "Beide entkommen den Tod";
        break;

    case (choice == 1 && y == 0):
        console.log("10");
        document.getElementById("3").innerHTML = "Gegner versucht auszuweichen. Spieler fährt weiter. Spieler gewinnt";
        break;

    case (choice == 0 && y == 1):
        console.log("01");
        document.getElementById("3").innerHTML = "Spieler versucht auszuweichen. Gegner fährt weiter. Gegner gewinnt";
        break;     
    
    default:
        document.getElementById("3").innerHTML = "didnt work";

}
}
ifs();