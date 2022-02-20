//Faça o exercícios abaixo:
//3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.

(function (win, doc) {
  'use strict';

  var $div = doc.getElementById("div01")
  var $input01 = doc.getElementById("1")

  const $btnResult = doc.getElementById("btn")
  
  var allInputs = doc.querySelectorAll('input')
  var newArray
  var maxNumber

  $btnResult.addEventListener('click', verifyInput, false);

  function verifyInput(){
    var values = $input01.value
    values = values.split(/\D/)
    
    if($input01.value == ''){
      return alert("insira os valores")
    }
    if(values.length != 5){
       return alert("insira 5 valores")
    }
    return result()
  }


  function result(){
    newArray= $input01.value
    return (
      newArray = newArray.split(/\D/).map(Number),
      maxNumber = Math.max(...newArray),
      showMaxNumber()
    );
  }

  function  showMaxNumber(){
    var $h3 = doc.createElement('h3')
    $h3.textContent =`Maior número digitado: ${maxNumber}` 
    
    return (
      $div.appendChild($h3),
      clearInput()
    )
  }
  
  function clearInput(){
    $input01.value = '';
  }


})(window, document);
