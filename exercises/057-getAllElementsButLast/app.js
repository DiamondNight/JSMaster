function getAllElementsButLast(array) {
    let arrFinal = [];
    let i = 0 ;
    while(i < array.length-1){
        arrFinal[i] = array[i];
        i++
    }
    return arrFinal
}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output)