
function iterativeLog(array) {
  array.forEach((element, index) => console.log(`${index}: ${element}`))
}

function iterate(callback) {
  let array = [1, 2, 3, 4]
  return array.map(num => callback())
}

function doToArray(array, callback) {
  return array.forEach(element => callback())
}
