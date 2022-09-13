const palindromes = function (str) {
    str = removePunctuation(str).toLowerCase();
    console.log(str);

    if (str === reverseStr(str)) return true;
    return false;
};

const reverseStr = str => {
    return str.split('').reverse().join('');
}

const removePunctuation = str => {
    // remove any punctuation and combine string
    const replacements = ['!', ',', ' ', '.'];

    replacements.forEach(el => {
        str = str.replaceAll(el, '');
    })
    return str;
}

palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
