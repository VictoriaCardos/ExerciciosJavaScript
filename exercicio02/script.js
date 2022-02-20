//Faça o exercícios abaixo:
//1 – Calcule a média de diversas notas digitadas pelo usuário.

(function (win, doc) {
  'use strict';

  var $div = doc.getElementById("div01")
  var $input01 = doc.getElementById("1")
  var $input02 = doc.getElementById("2")
  var $input03 = doc.getElementById("3")
  var $input04 = doc.getElementById("4")
  var $input05 = doc.getElementById("5")
  const $btnResult = doc.getElementById("btn")
  var allInputs = doc.querySelectorAll('input')
  var arr = []



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
    var quadrado;
    Object.keys(allInputs).map(function(item){
      quadrado= allInputs[item].value *allInputs[item].value
        arr.push(quadrado)

    })
      return (
        arr,
        handleButton()
      );
  }

  function handleButton(){
    var $ul = doc.createElement('ul')
    var $h3 = doc.createElement('h3')
      arr.map(function(item){
        var $li = doc.createElement('li')
        $li.textContent =`${item}`
        return (
          $ul.appendChild($li),
          clearInput()
        )
      })
    $h3.textContent ='Resultado do quadrado de cada valor:'
    return (
      $div.appendChild($h3),
      $div.appendChild($ul)
    )
  }

  function clearInput(){
    $input01.value = '';
    $input02.value = '';
    $input03.value = '';
     $input04.value = '';
     $input05.value = '';
  }


})(window, document);
