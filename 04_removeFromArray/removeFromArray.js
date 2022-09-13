const removeFromArray = function(array) {
    // instead of variable number of arguments, I'd make the second parameter an array of values to remove

    for (let i = 1; i < arguments.length; i++){
        array = array.filter(el => el !== arguments[i]);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
