function bubbleSort (arr) {
    // swapped = true
    //while swapped
        //swapped = false
        //loop through array left to right
            //check number and number that comes after it
            //if left num is greater, then swap, swapped = true
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i < arr.length; ++i) {
            if(arr[i] > arr[i+1]) {
                console.log(`try to swap ${arr[i]} and ${arr[i+1]}`)
                let temp  = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }

    return arr;
}

let arr = [5,4,2,6,8,14,1,3];
console.log(arr);
console.log(bubbleSort(arr));