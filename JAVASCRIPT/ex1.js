/*const product ={
    title:"parker",
    rating:4,
    offer:5,
    price:270
};
let a= 5
let b= 5
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a%b=",a%b);
console.log("a/b=",a/b);
*/
/* mutiple of 5
let x=prompt("enter a number");
if(x%5==0){
    console.log("number is multiple of 5");
}
else{
    console.log("not a multiple");
}*/

let x=parseInt(prompt("enter the code"));
switch(true){
    case(x>90 && x<=100):
        console.log("A"); 
        break;    
    
    
    case (x>70 && x<=90):
        console.log("B");  
        break;
    
    case(x>60 && x<=70):
        console.log("C");   
        break;
    
    case(x>50 && x<=60):
        console.log("D"); 
        break;
    
   default:
        console.log("F");
    
}
    