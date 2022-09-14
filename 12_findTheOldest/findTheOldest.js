const findTheOldest = function(people) {
    const CUR_YEAR = 2022;
    let maxAge = -1;
    let oldestPerson;
    people.forEach(person => {
        let maxYear = person.yearOfDeath ? person.yearOfDeath : CUR_YEAR;
        let age = maxYear - person.yearOfBirth;
        if (maxYear - person.yearOfBirth > maxAge){
            oldestPerson = person;
            maxAge = age;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
