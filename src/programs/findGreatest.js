//write a function to return the greatest number in an array
function findGreatest(arr){
    // let max=arr[0];
    let max=-Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
    {
     max=arr[i];
    }
}
return max;
}

let arr=[1,2,5,6,7,9];
// let arr=[-5,-4,-3,-2,-1];
console.log(findGreatest(arr));
