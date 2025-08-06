function pyramidPattern(n)
{
for(let i=0;i<n;i++)
{
let row="";
for(let j=0;j<n-i-1;j++)
{
row=row+" ";
}
let star="";
for(let k=0;k<=i*2;k++){
star=star+"*";
}
console.log(row+star);
}
}
pyramidPattern(5);