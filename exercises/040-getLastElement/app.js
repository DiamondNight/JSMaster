function getLastElement(array) {
  // Add your code after this line
  if (array.length === 0){
      return undefined;
  }
  return array[array.length - 1];
}