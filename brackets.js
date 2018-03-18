//https://www.codewars.com/kata/valid-braces/train/javascript

function validBraces(str){

  var brace = '{}';
  var bracks = '[]';
  var parens = '()';

  while(str.indexOf(brace) > -1 || str.indexOf(bracks) > -1 || str.indexOf(parens) > -1) {

  if(str.indexOf(brace) > -1){
    str = str.substring(0, str.indexOf(brace)) + str.substring(str.indexOf(brace) + 2);
  }

  if(str.indexOf(bracks) > -1){
    str = str.substring(0, str.indexOf(bracks)) + str.substring(str.indexOf(bracks) + 2);
  }

  if(str.indexOf(parens) > -1){
    str = str.substring(0, str.indexOf(parens)) + str.substring(str.indexOf(parens) + 2);
  }

  //console.log(str);


}
}

validBraces("([{}])");
