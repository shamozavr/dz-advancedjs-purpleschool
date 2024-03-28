const exampleArr = [
  {id: 1, name: 'Vasia'},
  {id: 3, name: 'Maria'},
  {id: 2, name: 'Petia'},
  {id: 3, name: 'Maria'},
  {id: 1, name: 'Vasia'},
  {id: 2, name: 'Petia'},
  {id: 3, name: 'Maria'}
]

const uniqueize = (arr) => {
  return new Set(
    exampleArr.map(el => exampleArr.find(object => object.id === el.id))
  );
}

console.log(uniqueize(exampleArr))