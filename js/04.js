function zero(array){
  var array1 = [];
  return array1;
}

function succ (a){
  a.push(true);
  return a;
}
b = succ([]); // b= [true];
b = aucc(b);// b = [true, true];


function one (a){
  var a =zero();
  a = succ(a);
  return a;
}
