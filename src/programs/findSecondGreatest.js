//write a function to return the second greatest number in an array
function findSecondGreatest(arr){
    if(arr.length<2){
     return "Please enter atleast 2 numbers";
    }
    let max=-Infinity;
    let secondMax=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
    { 
     secondMax=max;//-inf,4,
     max=arr[i];// 4,9,
    }
    else if(arr[i]>secondMax)
    {
    secondMax=arr[i];
    }
}
return secondMax;
}
// let arr=[1,2,5,6,7,9];
// let arr=[-5,-4,-3,-2,-1];
let arr=[4,9,0,2,8,7,1];
// let arr=[4];
console.log(findSecondGreatest(arr));
