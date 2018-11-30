var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/login', function (req, res, next) {
    console.log(req.query);
    //res.send('这是第一个页面');
    res.render('user/login',{
        title: '爱回收首页'
    })
})


router.get('/logut', function(req, res, next){
    delete req.session.userInfo;
    res.json({
        code: 1,
        msg: '退出成功'
    })
})

router.get('/reg', function (req, res, next) {
    console.log(req.query);
    //res.send('这是第一个页面');
    res.render('user/reg',{
        title: '爱回收首页'
    })
})


router.get('/userInfo', function (req, res, next) {
    if(!req.session.userInfo || !req.session.userInfo['username']) {
        return res.redirect('/user/login')
    }
    res.render('user/userInfo', {
        userInfo: req.session.userInfo
    })
})


router.get('/updateUser', function (req, res, next) {
    if(!req.session.userInfo || !req.session.userInfo['username']) {
        return res.redirect('/user/login')
    }
    res.render('user/updateUser', {
        userInfo:req.session.userInfo
    })
})

router.post('/updateUser', function (req, res, next) {
    var body = req.body;
    var userList = fs.readFileSync('./mock/user.json','utf-8');
    userList = JSON.parse(userList.toString());
    for(var i=0; i<userList.length;i++) {
        if(userList[i].username == req.session.userInfo.username){
            userList[i] = body;
            req.session.userInfo = userList[i];
            fs.writeFile('./mock/user.json', JSON.stringify(userList), function (err, data) {
                if(err) return err;
                return  res.redirect('/user/userInfo')
            })

        }
    }
})


router.post('/login', function (req, res, next) {
    var body = req.body;
    fs.readFile('./mock/user.json', function (err, data) {
        if(err){
            return err;
        }
        var userData = JSON.parse(data.toString());
        for(var i=0;i<userData.length;i++) {
            if(body.username === userData[i].username && body.password === userData[i].password) {
                req.session.userInfo = userData[i];
                //return res.redirect('/');
                return res.json({
                    code: 1,
                    msg: '登录成功'
                })
            }
        }
        res.json({
            code: 2,
            msg: '登录成功'
        })
        //res.redirect('/user/login');

    })
})

router.post('/reg', function (req, res, next) {
    var body = req.body;
    /*
    * 第一步查询有没有这个人
    * 第二步没有就写入数据库
    * 如过有就提示
    *
    * */
    fs.readFile('./mock/user.json', function (err, data) {
        if(err) return err;
        data = JSON.parse(data.toString())
        for(var i=0;i<data.length;i++) {
            if(data[i]['username'] == body['username']){
                //return res.redirect('/user/reg');
                return res.json({
                    code: 1,
                    msg: '注册成功'
                })
            }
        }
        data.push(body);
        fs.writeFile('./mock/user.json', JSON.stringify(data), function () {
            //return res.redirect('/user/login')
            return  res.json({
                code: 1,
                msg: '注册成功'
            })
        })
    })

})

module.exports = router;