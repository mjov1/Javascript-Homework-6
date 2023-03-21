let arr = [1, 2, 4, 6, 8, 11, 13, 27, 29, 31];
let primeArr = [];

for (let i = 0; i < arr.length; i++) {
    let check = true;
    for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j == 0) {
            check = false;
        }
    }
    if (check) {
        primeArr.push(arr[i]);
    }
}
console.log(primeArr);