const express = require('express');
const cors = require('cors')
const app = express();
const port = 3060;
const route = require('./routes');
// const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');

app.use(morgan('combined'));
var FileStore = require('session-file-store')(session);
app.use(cookieParser());
app.use(cors())
// // For store data in session
app.use(session({
    cookie: { maxAge: 5 * 24 * 60 * 60},
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new FileStore
}));
// app.use(fileUpload());
// // Directory to views folder
// app.set('views', path.join(__dirname, 'resources/views'));

// define : post 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 

route(app);

// app.use(express.static(path.resolve(__dirname, '../front-end/build')));

// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html'));
// });

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`)
})