
 function firstname(){
     console.log('jenish');

}

async function main() {
    setTimeout(firstname, 5000);
    let lastname = 
     setTimeout(() => {
         console.log('menpara')
    }, 10000);
        
    
  console.log (lastname)
    
}
main();



/* function firstname(main) {
    return new Promise(resolve => {
        setTimeout(() => {
            let lastname = setTimeout(() => {
                resolve('jenish');
            }, 5000);
            console.log('menpara');
        }, 5000);
    });
}
async function fullname() {
    var main = await firstname();
    console.log(main);
}
fullname(); */