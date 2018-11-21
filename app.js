var express = require('express');
var app = express();
var router = express.Router();
var swig = require('swig');
var route = require('./router');
var user = require('./router/user');
var bodyParser = require('body-parser');
var session = require('express-session');


app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1000
}))


app.use(session({
    secret :  '123', // 对session id 相关的cookie 进行签名
    resave : true,
    name: 'sessionId',
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000*60*60*24 //900000 设置 session 的有效时间，单位毫秒
    }
}));



swig.setDefaults({cache: false});
app.set('view cache', false);
app.set('views','./views');
app.set('view engine','html');
app.engine('html', swig.renderFile);
app.use('/static', express.static('public'));



app.use('/', route);
app.use('/user', user);

app.listen(8086, function () {
    console.log('服务已经启动，端口是8086')
})