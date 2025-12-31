const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const db = require('./utils/databaseUtil');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views',"home.ejs"))
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on the address http://localhost:${PORT}`);
});