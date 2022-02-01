function getIndex(nums, target) {
    return nums.sort().join('').indexOf(target);
}
var testNums = [4, 5, 6, 7, 0, 1, 2];
var target = 0;
console.log(getIndex(testNums, target));