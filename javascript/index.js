// 1. Array Manipulation

let arr = [1,2,2,3,3,4,5]
function fun(arr) {
  let newArr = []
  for(let i = 0;i < arr.length;i++) {
    let unqiue= true
    for(let j = i + 1;j < arr.length;j++) {
      if(arr[i] === arr[j]) {
        unqiue = false;
      }
    }
    if(unqiue) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(fun(arr));


// 2 . Object Operation 

let car1 = {
  brand:'Tata',
  model:'Nexon',
  year:2010
}

let car2 = {
  brand:'Toyota',
  model:'Innova',
  year:2020
}

function mergeing(car1,car2) {
  let mergeCar = {}

  for(let i in car1) {
    mergeCar[i] = car1[i]
  }

  for(let i in car2) {
    mergeCar[i] = car2[i]
  }

  console.log(mergeCar);
}
mergeing(car1,car2)

// 3. Logical Operations

let arr1 = [1,2,3,4,5]
let arr2 = [3,4,5,6,7]

function fun(a,b) {
  let arr3 = []
  let k = 0
  for(let i = 0;i < a.length;i++) {
    for(let j = 0;j < b.length;j++) {
      if(a[i] == b[j]) {
        arr3[k] = a[i]
        k++
      }
    }
    
  }
  return arr3
}

console.log(fun(arr1,arr2));