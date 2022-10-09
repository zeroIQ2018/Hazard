if(localStorage.getItem("Opnr") == 1){
    document.getElementById("state").innerHTML ="Punkte speicher ist aus"
}
else{
    document.getElementById("state").innerHTML ="Punkte speicher ist an"
}

function opse() {
    switch(typeof(Storage) !== "undefined"){
        case (localStorage.getItem("opnr") == 1):
            localStorage.setItem('opnr', 0);
            document.getElementById("state").innerHTML = "Punkte speicher ist aus"
            console.log(localStorage.getItem("opnr"));
            break

        case (localStorage.getItem("opnr") == 0):
            localStorage.setItem('opnr', 1);
            document.getElementById("state").innerHTML = "Punkte speicher ist an"
            console.log(localStorage.getItem("opnr"));
            break
        
        default:
            console.log("default");
    }
}