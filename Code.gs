/* by francois@gokam.co.uk */

var maxTitleWdith = 580;


function pixelTitle(input) {
 
 
  var letter = '«»àô€ÀÈÊÉéèê !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~–\n\r‘’£';
  var pixel = [10,10,10,10,10, 12, 12, 12, 12, 10, 10, 10,5, 5, 6, 10, 10, 16, 12, 3, 6, 6, 7, 11, 5, 6, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 11, 11, 11, 10, 18, 12, 12, 13, 13, 12, 11, 14, 13, 5, 9, 12, 10, 15, 13, 14, 12, 14, 13, 12, 11, 13, 12, 17, 12, 12, 11, 5, 5, 5, 8, 10, 6, 10, 10, 9, 10, 10, 5, 10, 10, 4, 4, 9, 4, 15, 10, 10, 10, 10, 6, 9, 5, 10, 9, 13, 9, 9, 9, 6, 5, 6, 11,10,0,0,4,4,10]
  var total = 0;  
 
  for (var i = 0; i < input.length; i++) {
 
    total = total + pixel[letter.indexOf(input.substring(i,i+1))];
  
  }
 
  return  total;
}
 
function pixelTitleTooLong(input){
  if(pixelTitle(input)<maxTitleWdith){
    return false;
  }else{
    return true;
  }
 
}
function previewTitle(input){
 if(pixelTitleTooLong(input)){
     return reduceTitle(input)+" ...";
  }else{
    return input;
  }
}



function reduceTitle(input){
 if(pixelTitleTooLong(input)){
    return reduceTitle(input.substring(0,input.lastIndexOf(" ")));
  }else{
      return input;

  }
}
