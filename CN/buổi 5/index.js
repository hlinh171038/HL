// 1 tại sao function trả về rồi vẫn nhận giá trị x
var count =0;
function makeAdder(x){
    return function(y) {
        return x+y;
    };
}
var add= makeAdder(5);

console.log(count += add(2));