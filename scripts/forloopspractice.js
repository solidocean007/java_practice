const numbers = [1, 2, 3, 4]

function reverseArray(array){
  let result = [];
  for(let i = 0; i < array.length; i++){
    a = array.slice(-i)
    result.push(a)
  }
  return result
}

console.log(reverseArray(numbers))