function solveExpression(exp) {
 for(let i = 0; i<10; i++){
   replaceQ(exp, i);

   let maths = replaceQ(exp, i);

   let idx = maths.indexOf('=')

   let prob = maths.slice(0, idx);
   let ans = maths.slice(idx+1);

   //console.log(prob, ans, 'yea');
   if(doMath(prob, ans, i)){
     //console.log(i);
   }
 }

};

function doMath(exp, ans, idx){
  // console.log(exp);
  // console.log(exp.charAt(0));
  if(eval(exp) == ans && exp.charAt(0) !== '0'){
    console.log(exp);
    return true
  }
  return false
};


function replaceQ(ex, num){

  let newStr = ex.split('').join(' ');

  while(newStr.indexOf('?') > -1){

    newStr = newStr.replace('?', num.toString());

  }
  return newStr.split(' ').join('');
};

solveExpression('?09424+15931=?25355');



var x = ["a", "c", "b"];
var y = ["d", "c", "y"];

function findCommon(a,b){
  var newArr = a.filter(function(item, idx){
    if(b.indexOf(item) < 0){
      return item
    }
  });
};


findCommon(x,y);
