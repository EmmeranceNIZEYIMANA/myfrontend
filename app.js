const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const {Signup,Login}=require('./auth')
const {UpdateBook,DeleteBook,InsertBook,SelectBook}=require('./books')
app.use(cors());
app.use(express.json());


//auth.js
app.post('/login',Login)
app.post('/signup',Signup)

//book.js
app.post('/insertbook',InsertBook)
app.get('/selectbook',SelectBook)
app.put('/updatebook/:id',UpdateBook)
app.delete('/deletebook/:id',DeleteBook)



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
