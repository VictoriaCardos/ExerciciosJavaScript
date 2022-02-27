function FirstFactorial(num) { 

  var cont = num 
  do{
    cont--
    num = cont*num
    
  }while(cont > 1)

  return num;  

}
   
// keep this function call here 
console.log(FirstFactorial(4));
