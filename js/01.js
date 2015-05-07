function buzz(a,b){
  var result = a;
  if ((a%5)==0){
    var result = "buzz";
  }
  return result; //(リターンが実行されると、そこで処理が完了する。値が決定するため。)
}
