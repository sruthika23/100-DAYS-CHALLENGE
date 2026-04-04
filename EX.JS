// // 
const num=[1,2,3,4];
const double=num.map((_,d)=>{
    if(d%2==0)
    {
        return(d*2);
    }
    else{
        return(d*3);
    }
})
console.log(double);

// //op:[]

// //ans:
const num=[1,2,3,4];
const double=num.map((d)=>{
    if(d%2==0)
    {
        return(d*2);
    }
    else{
        return(d*3);
    }
})
console.log(double);
op:[3,4,9,8]