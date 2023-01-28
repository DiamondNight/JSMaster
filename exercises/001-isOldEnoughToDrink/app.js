function isOldEnoughToDrink(age){
    if (age >= 21){
        return true;
    }
    return false;
}

let output = isOldEnoughToDrink(22);
console.log(output); // --> true