//write an fucntion that searches for an element in an array and return the index, if its not
//there just return -1

function searchElement(arr, x){
   for(let i=0;i<arr.length;i++){
   if(arr[i]==x)
   {
   return i;
   }
   }
   return -1;
}
let array=[4,2,0,10,8,30,666,54,21];
let result=searchElement(array, 2);
// let result=searchElement(array, 221);//passing arr and element as a arg
console.log("your searched element is in index of "+result);