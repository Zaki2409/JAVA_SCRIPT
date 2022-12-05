const express = require('express');

const app = express();

// listen to requests 
app.listen(3000);
// to respond for those requests
app.get('/' , (req ,res)=>{
    //res.send('<p>hone page bro!!</p>')
    res.sendFile('D:\\JAVA_SCRIPT\\server\\views\\index.html');
})
app.get('/about' , (req ,res)=>{
    //res.send('<p>about oage</p>')
    res.sendFile('D:\\JAVA_SCRIPT\\server\\views\\about.html');
})