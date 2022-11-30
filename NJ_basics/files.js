const fs = require('fs');

// TO READ FILES 

/*fs.readFile('./docs/blog1.txt',  ( err ,data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('last line');*/

// to write the file

/*fs.writeFile('./docs/blog1.txt' , 'hello mohammed' , () =>{
    console.log("file was written");
});*/

// directries
/*if (!fs.existsSync('./zaki')){
    fs.mkdir('./zaki' ,(err) =>{
        if(err) {
           console.log(err);
        }
        console.log("the folder is created ")
       }) 
}
else {
fs.rmdir('./zaki' , (err) => {
    if (err) {
        console.log(err);
    }
    console.log("folder delleted");
})
}*/

// to delete 

if(fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt' , (err) =>{
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    })
}