let numbers = [1, 2, 3, 4, 5, 6];
let nums = [];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let avg = sum / numbers.length;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > avg) {
        nums.push(numbers[i]);
    }
}

console.log(nums)