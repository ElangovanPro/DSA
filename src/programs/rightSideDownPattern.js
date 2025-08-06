function rightsideDownPattern(n)
{
for(let i=0;i<n;i++)
{
let row="";
for(let j=0;j<i;j++)
{
row=row+" ";
}
let star="";
for(let k=n;k>i;k--){
star=star+"*";
}
console.log(row+star);
}
}
rightsideDownPattern(5);