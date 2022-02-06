const express = require('express');
const app = express();
const port = 3060;
const route = require('./routes');
// const fileUpload = require('express-fileupload');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// const path = require('path');


// app.use(cookieParser());
// // For store data in session
// app.use(session({
//     cookie: { maxAge: 3 * 24 * 60 * 60 * 1000 },
//     secret: "S3cret",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(fileUpload());
// // Directory to views folder
// app.set('views', path.join(__dirname, 'resources/views'));

// define : post 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})