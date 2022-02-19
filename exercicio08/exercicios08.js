//6) Implemente um método que retorne um array, sem valores duplicados.Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]


function filterDuplicateArr(arr){
  var newArr =  arr.filter(function(ele,pos){
   return arr.indexOf(ele) == pos
   })

  return newArr;
  };
console.log(filterDuplicateArr([1,2,3,3,2,4,5,4,7,3]))

