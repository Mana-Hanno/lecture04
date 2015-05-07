function succ (a){
  a.push(true);
  return a;
}
b = succ([]); // b= [true];
b = aucc(b);// b = [true, true];
