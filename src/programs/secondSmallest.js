//write a function to return the second smallest number in an array
function findSecondSmallest(arr){
    if(arr.length<2){
     return "Please enter atleast 2 numbers";
    }
    let min=Infinity;
    let secondMin=Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]<min)
    { 
     secondMin=min;
     min=arr[i];
    }
    else if(arr[i]<secondMin)
    {
    secondMin=arr[i];
    }
}
return secondMin;
}
// let arr=[1,2,5,6,7,9];
let arr=[-5,-4,-3,-2,-1];
// let arr=[4,9,0,2,8,7,1];
// let arr=[4];
console.log(findSecondSmallest(arr));