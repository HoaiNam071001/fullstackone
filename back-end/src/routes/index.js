const loginRouter = require('./login');
const registerRouter = require('./register');


function route(app) {
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        if(req.session.views){req.session.views++;console.log(req.session.views); } 
        else{ req.session.views=1;console.log(req.session.views);}
        next();
    });
    app.use('/api/login', loginRouter);

    app.use('/api/register', registerRouter);
    
}

module.exports = route;