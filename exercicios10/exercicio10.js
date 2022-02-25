//10) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function unicArr(arr){
  var   auxArray = []
  
  var newArr = arr.map(function (item){
   if(Array.isArray(item)){
      item.map(function(index){
          auxArray.push(index)
      })
       
    }else{
     auxArray.push(item)
    }
  })
  return auxArray
}

console.log(unicArr([1, 2, [3], [4, 5]]))
