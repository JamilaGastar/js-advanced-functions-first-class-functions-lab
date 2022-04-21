// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

let returnFirstTwoDrivers = () => drivers.slice(0,2);
console.log(returnFirstTwoDrivers(drivers));

let returnLastTwoDrivers = () => drivers.slice(-2);
console.log(returnLastTwoDrivers());

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(Fare) {
    return function () {
        return (Fare) * (Fare);
    };
}

console.log(createFareMultiplier(4)());

let fareDoubler = (Fare) => (Fare) * 2;
console.log(fareDoubler(10));

let fareTripler = (Fare) => (Fare) * 3;
console.log(fareTripler(12));

function selectDifferentDrivers(drivers, selectingDrivers) {
    return function () {};
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers()));