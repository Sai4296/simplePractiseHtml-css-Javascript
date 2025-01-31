/*class math {
    constructor(a,b){
         this.a = a;
         this.b = b;
    }
    add(a=this.a,b=this.b) {
        console.log("a + b =", a+b);
    }
    sub(a=this.a,b=this.b) {
        console.log("a-b=",a-b);
    }
    mul(a=this.a,b=this.b) {
        console.log("a*b=",a*b);
    }
    div(a=this.a,b=this.b) {
        console.log("a/b=",a/b);
    }
    rem(a=this.a,b=this.b) {
        console.log("a%b=",a%b);
    }
};

let Math = new math(5,2);
console.log(Math);
*/
    function getData(data) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("data:",data);
                resolve("success");
            },2000);
        });       
    }

    getData(1).then((res) => {
        console.log(res);
        getData(2).then((res) => {
            console.log(res);
        });
    });