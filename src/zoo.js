/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');
// const { hours } = require('./data');
// const { employees } = require('./data');
// const { prices } = require('./data');

function animalsByIds(...ids) {
  if (ids === undefined) {
    return undefined;
  }
  return data.animals.filter(specAnimalId => ids.includes(specAnimalId.id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(pickAnimal => pickAnimal.name === animal)
  .residents.every(yearsOld => yearsOld.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
  .find(personName => personName
    .firstName === employeeName || personName.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(theEmployee => theEmployee.managers
    .find(theManager => theManager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees// must have all keys from employees
  .push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const objAnimals = {};
    data.animals.forEach((animal) => {
      const key = animal.name;
      const value = animal.residents.length;
      objAnimals[key] = value;
    });
    return objAnimals;
  }
  const animalFound = data.animals.find(animal => animal.name === species);
  return animalFound.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants)
  .reduce((total, ticketPrice) =>
    total + (entrants[ticketPrice] * data.prices[ticketPrice]), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // const objHour = {};
  // if (!dayName) {
  //   Object.keys(data.hours).forEach(hour => response(hour, objHour));
  // } else {
  //   response(dayName, objHour);
  // }
  // return obj;
}

function oldestFromFirstSpecies(id) {
  // const animalId = data.employees
  //   .find(employee => employee.id === id)
  //     .responsibleFor[0];
  // return (Object.values(data.animals
  //   .find(thisAnimal => thisAnimal.id === animalId)
  //   .residents.reduce((acc, current) => (acc.age > current.age ? acc : current))
}

function increasePrices(percentage) {
  const perc = extNumber => Math
  .round((extNumber + (extNumber * percentage * 0.01)) * 100) / 100;
  Object.keys(data.prices).forEach((price) => {
    data.prices[price] = perc(data.prices[price]);
  });
}
function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
