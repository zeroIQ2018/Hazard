var choice;

function buttondisable(){
    document.getElementById("btn0").disabled=true;
    document.getElementById("btn1").disabled=true;
}

function clickFunction(choice){
    console.log(choice);
    switch (typeof choice !== 'undefined') {
        case (choice === 1 && y === 1):
            console.log("11");
            document.getElementById("3").innerHTML = "beide sterben";
            buttondisable();
            break;
    
        case (choice === 0 && y === 0):
            console.log("00");
            document.getElementById("3").innerHTML = "Beide entkommen den Tod";
            buttondisable();
            break;
    
        case (choice === 1 && y === 0):
            console.log("10");
            document.getElementById("3").innerHTML = "Gegner versucht auszuweichen. Spieler fährt weiter. Spieler gewinnt";
            buttondisable();
            break;
    
        case (choice === 0 && y === 1):
            console.log("01");
            document.getElementById("3").innerHTML = "Spieler versucht auszuweichen. Gegner fährt weiter. Gegner gewinnt";
            buttondisable();
            break;     
        
        default:
            document.getElementById("3").innerHTML = "didnt work";
            buttondisable();
            break
    
    }
} 


var y = Math.random();
if (y < 0.5){
y = 0;
}
else {
y = 1;
}


console.log(y);
console.log(choice);
console.log(typeof(y));
console.log(typeof(choice));


