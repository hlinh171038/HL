// bài tập prototype
// tạo một constructor function là:
//animal{
    //type:loai,
    //color:màu sắc;
//}
// tạo ra dc các động vật ăn thịt"hồ, rắn báo"
// có method eat(food) -->'Eat food'
 var type ='human';
function Animal(type,color){
     
         this.type= type,
         this.color=color,
         Animal.prototype.food = function(food){
             console.log(`${this.type}eat ${food}`);
         }
     
 }
 const tiger1 = new Animal("dong vat an thit","yellow");
 const tiger2 = new Animal("dong vat an thit","brown");
 tiger2.food('meat');
 console.log(tiger1,tiger2);
 //scope create by function
 //normal function -->dynamic scope(who call me)-->tiger
 // khi dùng arrow function-->lexical scope -->this-->global-->human