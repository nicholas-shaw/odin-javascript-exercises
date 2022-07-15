const thisYear = new Date().getFullYear();

function getAge(yearOfBirth, yearOfDeath) {
  return (yearOfDeath ? yearOfDeath : thisYear) - yearOfBirth;
}

const findTheOldest = function (people) {
  return people.reduce((highestEntrySoFar, thisEntry) =>
    getAge(thisEntry.yearOfBirth, thisEntry.yearOfDeath) >
    getAge(highestEntrySoFar.yearOfBirth, highestEntrySoFar.yearOfDeath)
      ? thisEntry
      : highestEntrySoFar
  );
};

// Do not edit below this line
module.exports = findTheOldest;
