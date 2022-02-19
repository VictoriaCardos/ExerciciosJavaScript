//Faça o exercícios abaixo:
//1 – Calcule a média de diversas notas digitadas pelo usuário.

(function (win, doc) {
  'use strict';

  var $div = doc.getElementById("div01")
  var $input01 = doc.getElementById("1")
  var $input02 = doc.getElementById("2")
  var $input03 = doc.getElementById("3")
  const $btnResult = doc.getElementById("btn")

  var total = 0

  $btnResult.addEventListener('click', verifyInput, false);

  function verifyInput(){
    if($input01.value == '' ||
    $input02.value == '' ||
    $input03.value == ''){
      return alert("insira um valor em todos os inputs")
    }else{
      result()
    }
  }

  function result(){
   
    const numOfInput = 3;
    total= (parseInt($input01.value ) +         
    parseInt($input02.value) + 
    parseInt($input03.value)) /numOfInput
      var $h3 = doc.createElement('h3')
      $h3.textContent =`Resultado: ${total.toFixed(1)}` 
    return (
      $div.appendChild($h3),
      clearInput()
    )
  }

  function clearInput(){
    $input01.value = '';
    $input02.value = '';
    $input03.value = '';
  }


})(window, document);
