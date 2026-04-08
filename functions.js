function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


const fetch=() => {
    console.log("Fetching Results from NASA....");
}

result1=sum(33,1);
result2=minus(44,4);
result3=multi(33,3);
result4=divide(9,9);

fetch();
console.log("Your Result is ",result1);
console.log("Your Result is ",result2);
console.log("Your Result is ",result3);
console.log("Your Result is ",result4);


const greater=(a,b)=>{
    if(a>b){
        console.log(a," is greater than ",b);
    }

    else{
        console.log(`${b} is greater than ${a}`);
    }
}

greater(12,88);

const QuadrantProgrammeForAxis=(x,y)=>{

    if (x==0&&y==0){
        console.log(`${x} and ${y} lies at origin`);
    }

    else if(x>0&&y>0){
        console.log(`${x} and ${y} lies at 1st Quadrant`);
    }

    else if (x<0&&y>0){
        console.log(`${x} and ${y} lies at second Quadrant`);
    }

    else if (x<0&&y<0){
        console.log(`${x} and ${y} lies at third quadrant`);
    }

    else{

        console.log(`${x} and ${y} lies at forth quadrant`);
    }
}

QuadrantProgrammeForAxis(-2,7);


let arr=[12,21,34,54,6];
console.log(arr.length);
arr[3]=92;          // Replace index 3 by 92.
console.log(arr,typeof arr);     //An array is a object function.
console.log(arr.toString())     // Converts Array to String.
console.log(arr.join(" And "))  // Join a array by some text.
console.log(arr.push("Hammad")) // Add an element at end of array.
console.log(arr.unshift("Nouman"))  //add an element at the begning of array.
delete arr[0]       // delete an element from array.
console.log(arr)

let a1=[1,2,3,4,65,77]
let a2=[5,6,7,8,34,56]
let a3=[9,10,11,12,90,99]

console.log(a1.concat(a2,a3))   // Merge the arrays in one array. It does not changes existing array.

                    //return square of a array into new array.

let brr=[2,4,5,6,7,8,13,43,55];
// let newbrr=[];
// for (let index = 0; index < brr.length; index++) {
//     const values = brr[index];
//     newbrr.push(values**2);   
// }
let newbrr=brr.map((e)=>{
    return e**2              
})
console.log(newbrr)

                    // Filter the values from array on basis of condition.


const GreaterThanSeven=(e)=>{
    if(e>7){
        return true;
    }
    return false;

}
console.log(brr.filter(GreaterThanSeven));


                // Peform operations on whole array according to condition

let x1=[1,2,3,4,5,6];

const ReduceMultiplication=(a,b)=>{
    return a*b;
}

const ReduceAddition=(a,b)=>{
    return a+b;
}
const ReduceDivision=(a,b)=>{
    return a/b;
}
const ReduceSubtraction=(a,b)=>{
    return a-b;
}

console.log("x1 Array = ",x1);
console.log("Multiplication of whole array = ",x1.reduce(ReduceMultiplication));
console.log("Addition of whole array = ",x1.reduce(ReduceAddition));
console.log("Division of whole array = ",x1.reduce(ReduceDivision));
console.log("Subtraction of whole array = ",x1.reduce(ReduceSubtraction));

let o;
 let p=1;
for(o=6;o>=1;o--){
    console.log(o);
    p=p*o;
}
console.log(p);


