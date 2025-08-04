//write a function that retuens the number of negative numbers in an array

function countNegatives(arr){
   let count=0;
   for(let i=0;i<arr.length;i++){
   if(arr[i]<0)
   {
   count++;
   }
   }
   return count;
}
let array=[-1,-5,5,6,7,8,-4,-8];
let result=countNegatives(array);
console.log("count of negative elements in ana array "+result);