function downPyramidPattern(n)
{
for(let i=0;i<n-i;i++)
{
let row="";
for(let j=0;j<i;j++)
{
row=row+" ";
}
let star="";
for(let k=n;k>i*2;k--){
star=star+"*";
}
console.log(row+star);
}
}
downPyramidPattern(15);