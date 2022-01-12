const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    return function (fare) {
        return fare * x
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

//createFareMultiplier(25);

function selectDifferentDrivers(arrayOfdrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfdrivers);
}







