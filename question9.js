function calculateAverage (numbers){
    if (numbers.length == 0) return 0;

    const sum = numbers.reduce((total, num)=> total + num, 0);
    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));