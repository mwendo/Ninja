//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...
const insertionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        //inner loop moves backwards starting at arr[i]
        for(let startingIndex = i; arr[startingIndex] < arr[startingIndex -1]; startingIndex--){
            //swap the values
            let temp = arr[startingIndex];
            arr[startingIndex] = arr[startingIndex - 1];
            arr[startingIndex - 1] = temp;
        }
    }
    return arr;
}
console.log(insertionSort([6,4,5,2,8,14,1,3]));


let testArr = [3,6,8,10,14,7];
let startingIndex = 5; //points at the 7
for(let startingIndex = 5; testArr[startingIndex] < testArr[startingIndex -1]; startingIndex--){
    //swap the values
    let temp = testArr[startingIndex];
    testArr[startingIndex] = testArr[startingIndex - 1];
    testArr[startingIndex -1] = temp;

}

console.log(testArr);