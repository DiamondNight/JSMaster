function or(expression1, expression2) {
  // your code here
    if (!expression1 && !expression2) {
        return false;
    }
    else {
        return true;
    }
}

let output = or(false, false);
console.log(output); // --> true;