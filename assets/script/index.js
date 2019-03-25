console.log(123);
console.log(fetch)
fetch('/books').then(res=>{
    return res.json();
}).then(res=>{
    console.log(res,"🍎数据");
    document.getElementById('app').innerHTML = res.data;
})