//Faça o exercícios abaixo:
//4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

(function (win, doc) {
  'use strict';

  var $div = doc.getElementById("div01")
  var $input01 = doc.getElementById("1")

  const $btnResult = doc.getElementById("btn")
  
  var allInputs = doc.querySelectorAll('input')
  var newArray
  var arrTeens = []
  var moreAge = []

  $btnResult.addEventListener('click', verifyInput, false);

  function verifyInput(){
    var values = $input01.value
    values = values.split(/\D/)

    values = values.filter(function(item){
      return item !== ''
    })
    
    if($input01.value == ''){
      return alert("insira os valores")
    }
    
    return verifyAge()
  }
  
  function verifyAge(){
    newArray= $input01.value
    newArray = newArray.split(/\D/).map(Number),
    newArray.filter(function(item){
      return item >= 18 ? moreAge.push(item) : arrTeens.push(item)
    })
    return (
      arrTeens,
      moreAge,
      showAge()
    );
  }

  function  showAge(){
    var $h3 = doc.createElement('h3')
    var $h4 = doc.createElement('h4')
    
    $h3.textContent =`Maiores de idade: ${moreAge.map(function(item){
      return item
    })} | Menores de idade: ${arrTeens.map(function(item){
      return item
    })}`

    $h4.textContent = `Total Maiores: ${moreAge.length} | Total Menores: ${arrTeens.length}`
    
    return (
      $div.appendChild($h3),
      $div.appendChild($h4),
      clearInput()
    )
  }
  
  function clearInput(){
    $input01.value = '';
  }


})(window, document);
