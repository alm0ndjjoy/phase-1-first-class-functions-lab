// Code your solution in this file!
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

fareTripler(15)

function returnFirstTwoDrivers(drivers){
    return [drivers[0], drivers[1]]
}

function returnLastTwoDrivers(drivers){
    return drivers.slice (-2)
}

function createFareMultiplier (initial){
    return function(secondNumber){
        return initial * secondNumber;
    }
}


function selectDifferentDrivers(drivers=['Sally', 'Bob', 'Freddy', 'Claudia'], a ){
    

    return a(drivers);
}