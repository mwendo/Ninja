function selectionSort(arr) {
    for(let i = 0; i < arr.length; ++i){
        let min = i;
        for(let j = i; j < arr.length; ++j){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        console.log(arr[min]);
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));