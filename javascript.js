


function myFunction() {
    let x = document.getElementById("entered-number").value;
    numbers = "";
    for (let i = 1; i <= x; i++) {
        if(i % 5 == 0 && i % 3 == 0) {
            numbers += i + " fizzbuzz" + "<br>";
            document.getElementById("number-passed").innerHTML = numbers;
        } else if(i % 5 == 0 && i % 3 !== 0) {
            numbers += i + " fizz" + "<br>";
            document.getElementById("number-passed").innerHTML = numbers;
        } else if(i % 5 !== 0 && i % 3 == 0) {
            numbers += i + " buzz" + "<br>";
            document.getElementById("number-passed").innerHTML = numbers;
        } else if(i % 5 !== 0 && i % 3 !== 0) {
            numbers += i + "<br>";
            document.getElementById("number-passed").innerHTML = numbers;
        }
        
    
    }
}


// numbers += i + "<br>";
// document.getElementById("number-passed").innerHTML = numbers;