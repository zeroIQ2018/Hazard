if (typeof(Storage) !== "undefined") {
    sessionStorage.opnr = Number(sessionStorage.clickcount) 
    sessionStorage.opnr = 1
  }

function ops() {
    switch(typeof(Storage) !== "undefined"){
        case (sessionStorage.opnr == 1):
            sessionStorage.opnr = 0;
            document.getElementById("state") = "Punkte speicher ist aus"
        
        case (sessionStorage.opnr == 0):
            sessionStorage.opnr = 1;
            document.getElementById("state") = "Punkte speicher ist an"
            console.log(sessionStorage.opnr);
    }
}