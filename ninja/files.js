const fs = require('fs');

// TO READ FILES 

/*zaki.readFile('./docs/blog1.txt',  ( err ,data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('last line');*/

// to write the file

fs.writeFile('./docs/blog1.txt' , 'hello mohammed' , () =>{
    console.log("file was written");
});