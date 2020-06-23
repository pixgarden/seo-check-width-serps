/* by francois@gokam.co.uk */


var maxTitleWidth = 600;
var maxDescriptionWidth = 920;


function pixel(input) {
 
 
  var letter = ' «»àô€ÀÈÊÉéèê!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~–\n\r‘’£';
//  var pixel = [10,10,10,10,10, 12, 12, 12, 12, 10, 10, 10,5, 5, 6, 10, 10, 16, 12, 3, 6, 6, 7, 11, 5, 6, 5, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 5, 11, 11, 11, 10, 18, 12, 12, 13, 13, 12, 11, 14, 13, 5, 9, 12, 10, 15, 13, 14, 12, 14, 13, 12, 11, 13, 12, 17, 12, 12, 11, 5, 5, 5, 8, 10, 6, 10, 10, 9, 10, 10, 5, 10, 10, 4, 4, 9, 4, 15, 10, 10, 10, 10, 6, 9, 5, 10, 9, 13, 9, 9, 9, 6, 5, 6, 11,10,0,0,4,4,10]
  var pixel = [55, 51, 51, 51, 51, 51, 13, 13, 13, 13, 51, 51, 51, 56, 11, 51, 51, 58, 13, 38, 7, 7, 18, 57, 56, 7, 56, 56, 51, 38, 51, 51, 51, 51, 51, 51, 51, 51, 56, 56, 57, 57, 57, 51, 23, 13, 13, 24, 24, 13, 2, 36, 24, 56, 40, 13, 51, 47, 24, 36, 13, 36, 24, 13, 2, 24, 13, 9, 13, 13, 2, 56, 56, 56, 34, 51, 7, 51, 51, 40, 51, 51, 52, 51, 51, 44, 44, 40, 44, 47, 51, 51, 51, 51, 7, 40, 56, 51, 40, 24, 40, 40, 40, 7, 52, 7, 57, 51, 0, 0, 41, 41, 51]
  var total = 0;  
 
  for (var i = 0; i < input.length; i++) {
 
    total = total + pixel[letter.indexOf(input.substring(i,i+1))];
  
  }
 
  var total_pixel = total/10

  return  parseInt(total_pixel.toFixed(0));
}


function pixelTitleShort(input){

  return pixelTitleShortCustom(input, maxTitleWidth)

}

function pixelTitleShortCustom(input, TitleWidth){ 

if(pixel(input)<TitleWidth){
    return true;
  }else{
    return false;
  }
 

}


function pixelDescriptionShort(input){

  return pixelDescriptionShortCustom(input, maxDescriptionWidth)

}

function pixelDescriptionShortCustom(input, DescriptionWidth){ 

if(pixel(input)<DescriptionWidth){
    return true;
  }else{
    return false;
}
 

}



function previewTitle(input){

return previewTitleWidth(input,maxTitleWidth)

}

function previewTitleWidth(input,TitleWdith){


 /* input = REGEXREPLACE(input,"(\n)(\n{1,})","$1") */

  if(pixelTitleShortCustom(input,TitleWdith)){
      return input;
    }else{
       return reduceTitle(input)+" ...";
    }

}
 
function previewTitleCustom(input,TitleWdith,toRemove, toAdd){

/* input = REGEXREPLACE(input,"(\n)(\n{1,})","$1") */

input = input.replace(toRemove, "")

if(pixelTitleShortCustom(input,TitleWdith)){
      return input+toAdd;
    }else{
       return reduceTitle(input)+" ..."+toAdd;
    }

}




function reduceTitle(input){
 if(pixelTitleShort(input)){
    return reduceTitle(input.substring(0,input.lastIndexOf(" ")));
  }else{
      return input;

  }
}

function reduceTitleWidth(input, TitleWidth){
 if(pixelTitleShortCustom(input, TitleWidth)){
    return reduceTitle(input.substring(0,input.lastIndexOf(" ")));
  }else{
      return input;

  }
}


/* */





function previewDescription(input){

return previewDescriptionWidth(input,maxDescriptionWidth)

}

function previewDescriptionWidth(input,DescriptionWdith){
 

/* input = REGEXREPLACE(input,"(\n)(\n{1,})","$1") */

  if(pixelDescriptionShortCustom(input,DescriptionWdith)){
      return input;
    }else{
       return reduceDescription(input)+" ...";
    }

}
 
function previewDescriptionCustom(input,DescriptionWdith,toRemove, toAdd){

/* input = REGEXREPLACE(input,"(\n)(\n{1,})","$1")*/

input = input.replace(toRemove, "")

if(pixelDescriptionShortCustom(input,DescriptionWdith)){
      return input+toAdd;
    }else{
       return reduceDescription(input)+" ..."+toAdd;
    }

}


function demo_test(input){

return input.substring(0,input.lastIndexOf(" "));
}

function reduceDescription(input){
input = input.replace(" ...","")
 if(pixelDescriptionShort(input)){
    return input.substring(0,input.lastIndexOf(" "));
  }else{
      return input;

  }
}

function reduceDescriptionWidth(input, DescriptionWidth){
 if(pixelDescriptionShortCustom(input, DescriptionWidth)){
    return reduceDescription(input.substring(0,input.lastIndexOf(" ")));
  }else{
      return input;

  }
}
