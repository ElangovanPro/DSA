function rightStarPattern(n)
{
for(let i=0;i<n;i++)
{
let row="";
for(let j=0;j<n-i-1;j++)
{
row=row+" ";
}
let row2="";
for(let k=0;k<=i;k++){
row2=row2+"*";
}
console.log(row+row2);
}
}
rightStarPattern(5);