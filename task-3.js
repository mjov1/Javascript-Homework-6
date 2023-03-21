let numbers = [1, 2, 3, 4, 5,];
let sum = 3;
let check = false;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === sum) {
            console.log(numbers[i] + " + " + numbers[j] + " = " + sum);
            check = true;
            break;
        }
    }
    if (check === true){
        break;
    }
}
if (check === false) {
    console.log("None of the numbers are equal to the sum");
}