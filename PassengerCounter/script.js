// document.getElementById("count_element").innerHTML = 5;


let count = 0;
var dash = " - ";

function increase() {
    count = count + 1;
    document.getElementById("count_element").innerHTML = count;
}

function decrease() {
    count = count - 1;
    document.getElementById("count_element").innerHTML = count;
}

function save() {
    let countstr = count + " " + "-" + " ";
    document.getElementById("prev_entry").innerText += countstr;
    count = 0;
    document.getElementById("count_element").innerHTML = count;
}


