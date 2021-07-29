let array = [];
let arrayLength = 45;
let screenHeight = window.outerHeight;
let screenWidth = window.outerWidth;

if(screenWidth >= 500 && screenWidth < 600) {
    arrayLength = 65;
}
else if(screenWidth >= 600 && screenWidth < 700) {
    arrayLength = 80;
}
else if(screenWidth >= 700 && screenWidth < 800) {
    arrayLength = 95;
}
else if(screenWidth >= 800 && screenWidth < 900) {
    arrayLength = 110;
}
else if(screenWidth >= 900 && screenWidth < 1000) {
    arrayLength = 125;
}
else if(screenWidth >= 1000 && screenWidth < 1200) {
    arrayLength = 145;
}
else if(screenWidth >= 1200) {
    arrayLength = 200;
}

//Function that creates all the bars that will be sorted.
function createGrid() {
    let tableSet = document.querySelector("#tableSet");

    //Creating the tables:
    for(let i = 0; i < arrayLength; i++){
        setTimeout(() => {
            let tableRow = document.createElement("tr");
            tableRow.id = "[tr:" + i + "]";
            tableSet.appendChild(tableRow);
            
            let number = createRandomNumber();
            let tableData = document.createElement("td");
            tableData.id = "[td:" + i + "]";
            tableData.style.height = number + "px";   console.log(i + ": " + number);
            array.push(number);
            tableRow.appendChild(tableData);
        }, i * 3);
    }
}

//let screenHeight;
function createRandomNumber() {
    //let number = Math.floor(Math.random()*100 + Math.random()*10) + 10; //times 10 and  plus 10 because 10 pixels will be the minimum difference between two lengths.
    number;
let screenHeight1 = window.outerHeight;
let screenWidth1 = window.outerWidth;
    if(screenHeight1 >= 700 && screenWidth1 >= 1000) {
        number = Math.floor(Math.random()*200 + Math.random()*20) + 10; console.log("WTF");
    }
    else {
        number = Math.floor(Math.random()*100 + Math.random()*10) + 10; //times 10 and  plus 10 because 10 pixels will be the minimum difference between two lengths.
        console.log("WTFffffffffff");
    }console.log(number);
    return number;
}

createGrid();
