function zero(){
    return [];}
//zeroでは、長さ0の配列を作った。故にzeroは長さ0の配列の入った関数
function succ(a){
  a.push(1);
  return a;
}
//succでは、配列に１を追加する。

function n(b){
  var a = zero();
  var i = 0;
  var b;

  if(b == 0){
    var a = zero();

  }else if(b > 0){
    while(i < b){ //繰り返す場合はwhile文。
      a = succ(a);
      i = i + 1;
    }

  }else if(b < 0){
    var a = null;

  }

  return a;
}
