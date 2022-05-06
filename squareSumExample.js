function squareSum(numbers) {
    
    return numbers.reduce((acc, cur) => {
        acc = acc + Math.pow(cur,2);
        return acc;
    },0)
}

console.log(squareSum([0, 3, 4, 5]));