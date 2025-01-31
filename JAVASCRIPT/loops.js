/*for(let i=0;i<=100;i+=2){
    console.log("print",i);
}*/
/*
let x=prompt("Enter user name:");
console.log("@"+x+x.length);

let marks=[85,97,44,37,76,60];
let sum =0;
let avg=0;
for(let i of marks) {
    sum = sum+i;
    avg = sum/marks.length;
}
console.log("average=",avg);
let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("first=",arr.shift());
arr.splice(2,1,"OLA");
console.log(arr);
console.log(arr.push("Amazon"));
let arr = [55,96,94,87,65,90,100];

let newArr=arr.filter((val)=>{
    return val>90;
});
console.log(newArr);
let h2=document.querySelector("h2");
h2.innerText = h2.innerText + " From SAI";
h2.innerHTML = h2.innerHTML + "<h2> Prasad</h2>";
console.dir(h2);
console.log(h2.innerHTML);
let id=0;
let cla=document.querySelectorAll(".box"); 
for(cl of cla){
    cl.innerText=(`This is new added content ${id}`);
    id++;
    console.log(cl.innertext);
}
console.dir(cla);*/

let but=document.querySelector("#mode");
let curr= "light";

but.addEventListener("click",() =>{
    if(curr === "light") {
        curr = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.textcolor = "yellow";
    }else {
        curr ="light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.textcolor = "black";
    }
    console.log(curr);
});
