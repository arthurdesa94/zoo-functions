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
// const { employees } = require('./data');

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

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
