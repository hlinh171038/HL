// //lireral syntax
// const obj ={
//     name:'abc'
// }
// //2014-factory function
// function createPeople(name,age)
// {
//     return {
//         name: name,
//         age: age
//     }
// }
// const people1 = createPeople("lisa",19)
// // dùng
// //constructor function -->object(new)
// const people2 = new createPeople("lisa",19)
//  // để phan biệt tên viết hoa chữ cái đầu
//  //dynamic scope -->this( ai se goi nó)
//prototype
    function Student1(name){
        this.name =name;
        this.Sayhi = function(){
            console.log('helo');
        }
    }
    Student1.prototype.Sayhi = function(){
        console.log('helo');
    }
    const abc = new Student1('justigfrf');
    const a = new Student1('justi2');
console.log(abc,a);
    // 7 kiểu data nguyên thủy()
    //object -->reperence
    //vidu: student1 ('linh'); student2('linh')--> student1 === student2-->flase
    function Student(name){
        this.name =name;
        Student.prototype.document= function(){//. là object
            console.log('hello');
        }
    }
    const student1 = new Student('justi');
    const student2 = new Student('justi2');
    console.log(student1,student2)// so sánh-->true
    // function mới có prototype
// class
//ES6 --> sugar syntax (00P)
class Animal {
    constructor(type,color) {//es6
        this.type = type;
        this.color = color;
    }
    eat(food) {//es6
        console.log(`${this.type} eat ${food}`);
    }
}
// so sánh với contructor function
//class dùng stric mode bắt buộc phải có từ khóa new


