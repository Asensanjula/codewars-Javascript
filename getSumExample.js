// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
    //Good luck!
    let low = a;
    let high = b;
  
    if (a === b) return a;
    else if (a > b) {
      low = b;
      high = a;
    }
  
  //   let min = Math.min(a, b),
  //       max = Math.max(a, b);
  
    let count = 0;
    for (let i = low; i <= high; i++) {
      count = count + i;
    }
    return count;
  }
  
  console.log(getSum(-1, -2));
  console.log(getSum(1, 2));
  console.log(getSum(2, 2));
  