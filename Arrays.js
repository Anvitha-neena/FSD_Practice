var arr = [1,2,3,4];
// console.log(arr);
let sum = add(5,10)

function add(a,b){
    return a+b;
}

let mul = (a,b)=>(a*b);
//console.log(mul(5,3))

 sum = 0;

 //spread operator
 var arr2 = [-2,-1,0,...arr]//[...arr,5,6,7]

 //console.log(arr2)
 for(let i=0;i<arr2.length;i++){
     sum = add(sum,arr2[i]);
     //console.log(sum);
}

//objects
const student = {
  firstName: "Anvitha",
  lastName: "Dorishetty",
  age: 50,
  marks: 10,
  fullName: function(){
    return this.firstName+" "+this.lastName;
  }
};

//console.log(student["fullName"]);

