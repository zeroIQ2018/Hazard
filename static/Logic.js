var choice;
var amount;
var amount2;
var y = Math.random();
console.log(localStorage.getItem("opnr"));
var n1 = localStorage.getItem("cl1");
var n2 = localStorage.getItem("cl2");
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

function cleardata()
{
  localStorage.removeItem("cl1");
  localStorage.removeItem("cl2");
  console.log("yesitworks");
}

function Punkte1(amount) 
{
  if (localStorage.getItem('opnr') == 1) 
  { 
    localStorage.setItem("cl1",n1*1 + amount)
    document.getElementById("z").innerHTML = "Du hast " + localStorage.getItem("cl1") + " Punkte";
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

      localStorage.setItem("cl2", n2*1 + amount2)
      document.getElementById("x").innerHTML = "Er hat " + localStorage.getItem("cl2") + " Punkte";
    }

    else{
      document.getElementById("x").innerHTML = "Er hat " + amount2 + " Punkte";
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