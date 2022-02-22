//Faça o exercícios abaixo:
//6 – Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro).

(function (win, doc) {
  'use strict';

  var $div = doc.getElementById("div01")
  var $input01 = doc.getElementById("1")

  const $btnResult = doc.getElementById("btn")
  
  var values 


  $btnResult.addEventListener('click', verifyInput, false);

  
  function verifyInput(){
    values = $input01.value
    values = values.split(" ")

    values = values.filter(function(item){
      return item !== ''
    })
    
    if($input01.value == ''){
      return alert("insira os nomes")
    }
    
    return showInvertNames()
  }

  function  showInvertNames(){
    var $h3 = doc.createElement('h3')
    var $h4 = doc.createElement('h4')
    
    $h3.textContent =`Ordem digitada: ${values.map(function(item){
      return item
    })} | Lista de nomes invertida: ${values.reverse().map(function(item){
      return item
    })}`

    
    
    return (
      $div.appendChild($h3),
      clearInput()
    )
  }
  
  function clearInput(){
    $input01.value = '';
  }


})(window, document);
