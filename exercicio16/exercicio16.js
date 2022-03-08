//16) Implemente um método divida um array por uma quantidade passada por parâmetro.Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

//ainda não funciona

function agroupArr(arr, param){
  var newArr = []
  let cont = 0
  arr.map(function(item){
    cont++
    if(cont-1<param){
      newArr.push(item)
      console.log(newArr)
    }
    return newArr
  })
}

console.log(agroupArr([1, 2, 3, 4, 5], 2))
