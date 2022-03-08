//16) Implemente um método divida um array por uma quantidade passada por parâmetro.Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

//ainda não funciona

function agroupArr(arr, param){
  var newArr = []
  let cont = Math.floor( arr.length / param)
  console.log(cont)
  arr = JSON.stringify(arr)
  return arr.split(',',cont)
  
  
}

console.log(agroupArr([1, 2, 3, 4, 5], 2))
