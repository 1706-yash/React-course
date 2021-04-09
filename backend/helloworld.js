console.log('hello world');
console.log(__filename);
console.log(__dirname);
setTimeout(() =>{
    console.log('SetTimeout')
},3000);

setInterval(()=>{
    console.log('SetInterval')
},2000);