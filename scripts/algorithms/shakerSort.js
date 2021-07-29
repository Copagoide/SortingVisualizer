export async function shakerSort(){

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

    let length = arrayLength;
    let valueToBeChanged1;
    let valueToBeChanged2;
    let arrayCurrent = 0;
    let shouldContinue;

    do {
        shouldContinue = false;

        for (let j = 1; j < length; j++) {

            if (array[j] < array[(j - 1)]) {
                await waitThisTime(delay);
                shouldContinue = true;
                arrayCurrent = array[j];
                array[j] = array[(j - 1)];
                array[(j - 1)] = arrayCurrent;

                valueToBeChanged1 = document.getElementById("[td:" + j + "]");
                valueToBeChanged1.style.height = array[j] + "px";
                valueToBeChanged1.classList.add("sorting");
                valueToBeChanged2 = document.getElementById("[td:" + (j - 1) + "]");
                valueToBeChanged2.style.height = array[(j - 1)] + "px";
                valueToBeChanged2.classList.add("sorting");

                setTimeout(() => {
                    valueToBeChanged1.classList.remove("sorting");
                    valueToBeChanged2.classList.remove("sorting");
                }, 100);
            }
            
        }

        for (let k = length; k > 0; k--) {

            if (array[k] < array[(k - 1)]) {
                await waitThisTime(delay);
                shouldContinue = true;
                arrayCurrent = array[k];
                array[k] = array[(k - 1)];
                array[(k - 1)] = arrayCurrent;

                valueToBeChanged1 = document.getElementById("[td:" + k + "]");
                valueToBeChanged1.style.height = array[k] + "px";
                valueToBeChanged1.classList.add("sorting");
                valueToBeChanged2 = document.getElementById("[td:" + (k - 1) + "]");
                valueToBeChanged2.style.height = array[(k - 1)] + "px";
                valueToBeChanged2.classList.add("sorting");
                
            setTimeout(() => {
                valueToBeChanged1.classList.remove("sorting");
                valueToBeChanged2.classList.remove("sorting");
            }, 100);
            }
        }
        length--;

    } while (shouldContinue == true)

    //Little delay to make this more appealing.
    await waitThisTime(600);
    
    //Playing with colors. Some UX? or UI? idk.
    for (let i = 0; i < arrayLength; i++) {
        await waitThisTime(8);
        valueToBeChanged1 = document.getElementById("[td:" + i + "]");
        valueToBeChanged1.classList.add("sorted");
    }
    for (let i = 0; i < arrayLength; i++) {
        await waitThisTime(7);
        valueToBeChanged1 = document.getElementById("[td:" + i + "]");
        valueToBeChanged1.classList.remove("sorted");
    }

    function waitThisTime(ms) {
        return new Promise (resolve => {
            setTimeout(() => { resolve('') }, ms);
        })
    }
}