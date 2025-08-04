//simple star pattern 1
function simpleStarPattern(n){

for(let i=0;i<n;i++)
{
 let row="";
 for(let j=0;j<=i;j++)
{
row=row+(i+1);//""+0, 01, 012
}
console.log(row);
}
}

simpleStarPattern(5)