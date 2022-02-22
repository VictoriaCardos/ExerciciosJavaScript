//Faça o exercícios abaixo:
//7 – Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o ano. (Obs.: não necessita de laço de repetição)

(function (win, doc) {
  'use strict';

  var $div = doc.getElementById("div01")
  var $input01 = doc.getElementById("1")

  const $btnResult = doc.getElementById("btn")
  
  var values 


  $btnResult.addEventListener('click', verifyInput, false);

  
  function verifyInput(){
    values = $input01.value
    values = values.split(/\D/).map(Number)

    values = values.filter(function(item){
      return item !== ''
    })
    
    if($input01.value == ''){
      return alert("insira a data")
    }
    
    return showData()
  }

  function  showData(){
    var $h3 = doc.createElement('h3')
    var $h4 = doc.createElement('h4')
    
    $h3.textContent =`Dia: ${values[0]} | Mês: ${values[1]} |  Ano: ${values[2]}`

    
    
    return (
      $div.appendChild($h3),
      clearInput()
    )
  }
  
  function clearInput(){
    $input01.value = '';
  }


})(window, document);
