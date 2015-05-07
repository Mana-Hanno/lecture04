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


function ten (a){
  var a =zero();
  var i = 0;
  while(i < 10){
    a = succ(a);
    i = i+1;
  }
  // a = succ(a);
  // a = succ(a);
  // a = succ(a);
  // a = succ(a);
  // a = succ(a);
  // a = succ(a);
  // a = succ(a);
  // a = succ(a);
  // a = succ(a);
  // a = succ(a);
  return a;
}
