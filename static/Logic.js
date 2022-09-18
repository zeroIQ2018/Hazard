    
    //write the choice of the player i forgor how????? why tf is the element with id "3" the one with 

    var choice;
    function clickFunction(choice) 
    {
        /*idk why i did this in retarded but im keeping this for the future for flipping a number between 0 and 1
            if (choice === 0)
            {
                choice = 1;
            }
        else {
            choice = 0;
        }
        */
        console.log(choice);
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
    // if statment
    // or should i use switch statements
    //does it only check at the start or should i use a loop??????
       
    if (choice === 1 && y === 1)
    {
        console.log("11");
        document.write("Tod");

    } 
    
    else if (choice === 0 && y === 0)
    {
        console.log("00");
        document.write("Beide entkommen den Tod");
    } 
    
    else if (choice === 1 && y === 0)
    {
        console.log("10");
        document.write("Gegner versucht auszuweichen. Spieler fährt weiter. Spieler gewinnt");
    } 
    
    else if (choice === 0 && y === 1) 
    {
        console.log("01");
        document.write("Spieler versucht auszuweichen. Gegner fährt weiter. Gegner gewinnt");
    } 
    
    else 
    {
        document.write(" it didnt work");
    }
   