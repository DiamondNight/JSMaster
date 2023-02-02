function getElementsUpTo(array, n) {
  let arrFinal=[];
  let i=0;
  while (i < n){
      arrFinal.push(array[i]);
      i++;
  }
  return arrFinal;
}