//7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function isEqual(arr1,arr2){
  var verify = arr1.every(function(item){
    return arr2[item] == arr1[item] 
  })

  return verify
}

console.log(isEqual([1,2,3,4],[1,2,3,4]))
