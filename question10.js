function countNegatives(numbers){
    return numbers.filter(num => num < 0).length;
}

console.log(countNegatives([-1, 2, -3, 4, -5]));