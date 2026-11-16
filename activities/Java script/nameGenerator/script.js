function generateName() {
    const month = document.getElementById("month").value;
    const age = Number(document.getElementById("age").value);
    const color = document.getElementById("color").value;
    const result = document.getElementById("result");
    let name1 = "";
    let start = "";
    let middle = "";
    let end = ""
    
    if (month === "february" || month ==="march" || month ==="april") {
        start = "Gri";
        result.style.color = "blue";
        result.style.backgroundColor = "yellow";
    } else if (month === "may" || month ==="june" || month ==="july") {
        start = "Te";
        result.style.color = "red";
        result.style.backgroundColor = "blue";
    } else if (month === "august" || month ==="september" || month ==="october") {
        start = "Ol";
        result.style.color = "green";
        result.style.backgroundColor = "red";
    } else if (month === "november" || month ==="december" || month ==="january") {
        start = "Th";
        result.style.color = "yellow";
        result.style.backgroundColor = "green";
    } else {
        start = "poo";
        result.style.color = "brown";
        result.style.backgroundColor = "black";
    }

    if(age < 10){
        middle = "ff";
    } else if (age < 25) {
        middle = "ag";
    } else if (age < 40) {
        middle = "iv";
    } else if (age < 65) {
        middle = "e";
    } else {
        middle = "poo";
    }
    
    if (color === "red" || color === "orange") {
        end = "in";
    } else if (color === "yellow") {
        end = "an";
    } else if (color === "green" || color === "blue") {
        end = "er";
    } else if (color === "purple") {
        end = "o";
    } else {
        end = "poo";
    }

    name1 = start + middle + end;
    
    document.getElementById("result").textContent = name1;
}



