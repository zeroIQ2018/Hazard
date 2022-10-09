var choice;
var amount;
var amount2;
var y = Math.random();
console.log(localStorage.getItem("opnr"));
if (y < 0.5){
    y = 0;
    }
    else {
    y = 1;
    }

if(localStorage.getItem('opnr') == 0)
{
  document.getElementById("cur").innerHTML = "Punkte Speichern ist aus"
}
else
{
  document.getElementById("cur").innerHTML = "Punkte Speichern ist an"
}

function ena()
{
  document.getElementById("dis").disabled=false
  document.getElementById("dis").innerHTML= "Hier drücken um das Spiel neu zu starten"
}

function buttondisable()
{
    document.getElementById("btn0").disabled=true;
    document.getElementById("btn1").disabled=true;
}



function Punkte1(amount) 
{
  if (localStorage.getItem('opnr') == 1) 
  {   
      localStorage.cl1 + amount
      document.getElementById("z").innerHTML = "Du hast " + localStorage.cl1 + " Punkte";
  } 
  

  else
  {
    document.getElementById("z").innerHTML = "Du hast "  + amount + " Punkte";
  }
}

  function Punkte2(amount2) 
  {
    if (localStorage.getItem('opnr') == 1) 
    {     

      localStorage.cl2 + amount2
      document.getElementById("x").innerHTML = "Er hat " + localStorage.cl2 + " Punkte";
    }

    else{
      document.getElementById("x").innerHTML = "Er hat " + amount2+ " Punkte";
    }
  }




function clickFunction(choice){
    console.log(choice);
    switch (typeof choice !== 'undefined') 
    {
        case (choice === 1 && y === 1):
            console.log("11");
            document.getElementById("3").innerHTML = "beide sterben";
            buttondisable();
            Punkte1(0);
            Punkte2(0);
            ena(); 
            break;
    
        case (choice === 0 && y === 0):
            console.log("00");
            document.getElementById("3").innerHTML = "Beide entkommen den Tod";
            buttondisable();
            Punkte1(6);
            Punkte2(6);
            ena();
            break;
    
        case (choice === 1 && y === 0):
            console.log("10");
            document.getElementById("3").innerHTML = "Gegner versucht auszuweichen. Spieler fährt weiter. Spieler gewinnt";
            buttondisable();
            Punkte1(8);
            Punkte2(2);
            ena();
            break;
    
        case (choice === 0 && y === 1):
            console.log("01");
            document.getElementById("3").innerHTML = "Spieler versucht auszuweichen. Gegner fährt weiter. Gegner gewinnt";
            buttondisable();
            Punkte1(2);
            Punkte2(8);
            ena();
            break;     
        
        default:
            document.getElementById("3").innerHTML = ":/";
            buttondisable();
            ena();
            break
    
    }
} 