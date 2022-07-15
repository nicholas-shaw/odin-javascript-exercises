const thisYear = new Date().getFullYear();

function getAge(yearOfBirth, yearOfDeath) {
  return (yearOfDeath ? yearOfDeath : thisYear) - yearOfBirth;
}

const findTheOldest = function (people) {
  return people.reduce((lastEntry, thisEntry) =>
    getAge(thisEntry.yearOfBirth, thisEntry.yearOfDeath) >
    getAge(lastEntry.yearOfBirth, lastEntry.yearOfDeath)
      ? thisEntry
      : lastEntry
  );
};

// Do not edit below this line
module.exports = findTheOldest;
