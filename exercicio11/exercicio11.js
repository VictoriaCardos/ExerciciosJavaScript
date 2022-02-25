//11) Implemente um método que encontre os valores comuns entre dois arrays.Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function inComun(arr,arr2){
  var show = []
  var verify = arr.map(function(item){
    arr2.map(function(item2){
    if (item2== item){
       show.push(item)
    } 
      return show
    })

  })
  return show
}

console.log(inComun([6, 8], [8, 9]))
