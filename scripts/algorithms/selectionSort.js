export async function selectionSort() {

    //This delay and if-statements set the speed at which the algorithm will run.
    let delay = 80;

    if(isLowSpeed) {
        delay = 170;
    }
    else if(isMediumSpeed) {
        delay = 50;
    }
    else if(isHighSpeed) {
        delay = 18;
    }
    else if(isOriginalSpeed) {
        delay = 0;
    }

    let valueToBeChanged1 = document.getElementById("[td:" + 0 + "]");
    let valueToBeChanged2 = document.getElementById("[td:" + 1 + "]");
    let valueThroughoutTheArray = document.getElementById("[td:" + 0 + "]");
    let arrayCurrent = 0;
    let index = 0;

    for (let i = 0; i < arrayLength; i++) {
        
            for (let j = i; j < arrayLength; j++) {
                valueThroughoutTheArray = document.getElementById("[td:" + j + "]");
                valueThroughoutTheArray.classList.add("sorting");
                await waitThisTime(delay);

                if (array[j] < array[i]) {
                    arrayCurrent = array[i];
                    array[i] = array[j];
                    array[j] = arrayCurrent;
                    index = j;
                }
                
                valueThroughoutTheArray.classList.remove("sorting")
            }
            await waitThisTime(delay);
            valueToBeChanged1 = document.getElementById("[td:" + i + "]");
            valueToBeChanged1.classList.add("sorted");
            valueToBeChanged1.style.height = array[i] + "px";
            valueToBeChanged2 = document.getElementById("[td:" + index + "]");
            valueToBeChanged2.style.height = array[index] + "px";
    }

    //Little delay to make this more appealing.
    setTimeout(() => {}, 1000)
    
    //Reseting the color of all the bars.
    for (let k = 0; k < arrayLength; k++) {
        await waitThisTime(7);
        valueToBeChanged1 = document.getElementById("[td:" + k + "]");
        valueToBeChanged1.classList.remove("sorted");
    }
    
    function waitThisTime(ms) {
        return new Promise (resolve => {
            setTimeout(() => { resolve('') }, ms);
        })
    }
}