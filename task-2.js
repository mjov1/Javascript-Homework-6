let strings = ["Jocka", "Test", "Test1", "Test", "Marko", "Marko"];
let duplicate = 0;
let check = false;

for (let i = 0; i < strings.length; i++) {
    for (let j = 1; j < strings.length; j++) {
        if (strings[i] === strings[j]) {
            duplicate = strings[j];
            check = true;
        }
    }
    if (check) {
        break;
    }
}
if (check) {
    console.log(duplicate);
}
else {
    console.log("There are no duplicate strings.")
}
