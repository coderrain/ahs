var express = require('express');
var app = express();
var router = express.Router();
var swig = require('swig');


app.set('view cache', false);
app.set('views','./views');
app.set('view engine','html');
app.engine('html', swig.renderFile);
app.use('/static', express.static('public'));


router.get('/', function (req, res, next) {
    console.log(req.query);
    //res.send('这是第一个页面');
    res.render('index',{
        title: '爱回收首页'
    })
})

app.use('/', router);

app.listen(8086, function () {
    console.log('服务已经启动，端口是8086')
})