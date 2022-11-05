const findAge = function(person) {
  if (person.yearOfDeath == undefined) {
    const thisYear = new Date().getFullYear();
    return thisYear - person.yearOfBirth; // Return age if alive
  } else {
    return person.yearOfDeath - person.yearOfBirth; // Return age if dead
  }
}

const findTheOldest = function(people) {
  const oldest = people.reduce((lastPerson, nextPerson) => {
    // Compare age of last person and next person
    // Return older person and repeat for next object
    if (findAge(lastPerson) < findAge(nextPerson)) {
      return nextPerson;
    } else {
      return lastPerson;
    }
  }, people[0]);
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;