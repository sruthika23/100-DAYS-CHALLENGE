let ln=["Python","js","java"];
console.log(ln);
ln.push("HTML");
console.log("after push:",ln);
ln.pop();
console.log("After pop:",ln);
ln.unshift("c");
console.log("After shift:",ln);
ln.shift();
console.log("After unshift:",ln);
for(let i=0;i<ln.length;i++){
    console.log(ln[i]);
}

