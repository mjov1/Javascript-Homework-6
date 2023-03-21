let arr = [1, 0, -1, 2, 3, -10];

let positiveNums = [];
let sum = 0;

for (i=0; i<arr.length; i++) {
    if (arr[i] > 0) {
        positiveNums.push(arr[i]);
        sum += arr[i];
    }
}
console.log(sum);