// kiểu data
    //primitive
        // string
        // number
        //undefined
        //null
        //boolean
        //sybol
        //lấy data ô nhớ xài lun
        // có ô nhớ riêng biệt
        //so sanh = true;// so sánh giá trị
        // d1=10;
        // d2=10;
        // d1==d2

    //Refefrence type
        //object
        //array
        // tham chiếu den ô nhớ lấy data
        // ô nhớ tham chiếu
        //so sanh = false;// địa chỉ ô nhớ
        //c1={name:"linh"}
        //c2={name:"linh"}
        //c1==c2 ==>false;
// object
    // literal object
    //{..}
    // factory function
    //function ->{return object mới}
    // construvtor function
    // function dùng vs từ khóa new để khởi tạo object null --> gán cho this -->khởi tạo

    // class-ES6(js)
    // cú pháp mới 
    class Animal {
        constructor(name){
            this.name = name
        }
        run(){
            console.log("chay");
        }
    }
    //intance
    const i1 = new Animal("bao")// name:bao;
    i1.run()//--> //ok
    // ưu điểm:
        // bắt buộc phải có từ khóa "new"(stric mode)
        // cú pháp dể nhìn
// prototype
    //object.create(o1)--> tạo object rỗng có prototype = o1;//method thêm vào từ ES6
// cách xc2 định biến là object hay không ?
    // typeof();// không tối ưu vì nếu dữ liệu là arry[], null -->typeof trả về object
    //instanceof;//không tối ưu vì nếu dữ liệu là arry[] -->typeof trả về object
    //constructor === object
    // const obj =[],null;
    // if(obj typeof 'Object')
    // if(obj instanceof 'Object')
    // if(obj.constructor ===Object)
    //typeof undefined === typeof NULL -->true
    //typeof undefined === typeof null -->false
// truthy và falthy
    //falthy:'',0,null,undefined,false,NaN
    //truthy: tất cả cái còn lại
// một số có phải số tự nhiên hay không
    //a%1===0 
    let a= 6;
    if(a%1===0){
        console.log("so tu nhien");
    }
    //Math.//floor//ceil//round
    //Math.ceil(a)===a;// tương tự
    //parseInt(a,10)===a;

    


