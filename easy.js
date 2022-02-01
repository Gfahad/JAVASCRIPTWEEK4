function average(myArray) {
    var total = 0;
    for (let i = 0; i < myArray.length; i++) {
        total += myArray[i];
    }
    return total / myArray.length;
}
var input = [1, 4, 7];
console.log(average(input));