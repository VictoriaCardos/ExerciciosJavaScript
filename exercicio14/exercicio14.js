function LongestWord(sen) { 
  var leng = []
  var word


  t = sen.split(" ").map(function(item){
    leng= item.match(/\w/g).join('')
    
    return leng.lengt
  })

  var max = Math.max(...t);
 
  sen = sen.split(" ").filter(function(item){
      if(item.length == max && word === undefined){
         word = item 
         return word
      }
  })

  return word

}
   
// keep this function call here 
console.log(LongestWord("love dogs"));
