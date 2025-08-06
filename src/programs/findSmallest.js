//write a function to return the smallest number in an array
function findSmallest(arr){
// let min=arr[0];
let min=Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]<min)
    {
     min=arr[i];
    }
}
return min;
}

let arr=[1,2,5,6,7,9];
// let arr=[-5,-4,-3,-2,-1];
console.log(findSmallest(arr));
