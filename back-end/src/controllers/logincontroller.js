const obj = require('../models/user');

exports.index = (req, res,next)=>{
    console.log(req.body.username, req.body.password);
    var k = 0;
    obj.forEach(element => {
        if(element.username == req.body.username){
            if(element.password == req.body.password){
                k = 2;
                req.session.user = element.username;
                res.send({'user':element.username,'key':element.key});
            }
            else k = 1;
        }
    });
    if(k == 0) res.send('user');
    else if(k == 1)  res.send('pass');
}
// no  tra dc data ve client roi a, no gui cai user ve roi ne
// tai vi cai nodemon no restart lai, xong no mat du lieu a
// cho t xem lai ti, co ve cai req no k dung, voi lai m xem lai du lieu a, 
// luc m xai nodemon, cai du lieu cua m khi react post no lam mot trong cai file bi thay doi, nen no restart lai
// xem thu file nao bi thay doi k