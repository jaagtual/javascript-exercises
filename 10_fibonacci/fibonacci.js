const fibonacci = function(idx) {
    idx = Number(idx);
    if (idx < 0) return 'OOPS';
    if (idx <= 2) return 1;

    let prev1 = 1;
    let prev2 = 1;
    let curSum;
    
    for (let i = 3; i <= idx; i++) {
        curSum = prev1 + prev2;
        prev1 = prev2;
        prev2 = curSum;
    }
    return curSum;
};

// Do not edit below this line
module.exports = fibonacci;
