function getElementsAfter(array, n) {
    let arrFinal = [];
    array.filter((item, index)=>{
        if (index > n){
        arrFinal.push(item)
        }
    })
        return arrFinal;
  
}