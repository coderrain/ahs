var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
    //console.log(req.session)
    console.log(req.query);
    //res.send('这是第一个页面');
    var news = fs.readFileSync('./mock/news.json', 'utf-8');
    var hostNews = JSON.parse(news.toString()).filter(function (p1, p2, p3) {
        return p1.tag === 'hot';
    })
    //console.log(news);
    fs.readFile('./mock/link.json', function (err, data) {
        if(err){
            res.render('index',{
                title: '爱回收首页',
                userInfo: req.session.userInfo,
                linkData: [],
                hostNews:hostNews,
                news: JSON.parse(news.toString())
            })
        }else{
            var listData = JSON.parse(data.toString())
            res.render('index',{
                title: '爱回收首页',
                userInfo: req.session.userInfo,
                linkData:listData,
                hostNews:hostNews,
                news: JSON.parse(news.toString())
            })
        }
    })


})

router.get('/search', function (req, res, next) {
    var query = req.query;
    //console.log(query.artitle);
    var newsData = fs.readFileSync('./mock/news.json', 'utf-8');
    //读文件读出来的是buffer内容，你需要把buffer转换成字符串，字符串转换成对象操作
    var nowNews = JSON.parse(newsData.toString()).filter(function (p1, p2, p3) {
        return p1.title === query.artitle;
    })

    res.render('search', {
        title: '搜索结果',
        nowNews:nowNews
    })
})

/*router.get('/shop', function(req, res, next){
    res.redirect('/shop/1')
})*/
router.get('/shop', function(req, res, next){
    var data = [{
        id:1,
        title: '手机',
        childList: [{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        }]
    },{
        id:2,
        title: '热门',
        childList: [{
            name: 'vivo',
            price: 100000000,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'vivo',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        }]
    },{
        id:3,
        title: '热门',
        childList: [{
            name: 'vivo',
            price: 100000000,
            imgUrl: '/static/img/iphone6.png'
        }]
    }]
    /*var result = {};
    var id = req.params.id;

    for(var i=0;i<data.length;i++) {
        if(data[i].id == id){
            result = data[i]
        }
    }
*/
    res.json({
        code: 1,
        data:data
    })
})


router.get('/device', function(req, res, next){
    var data = [{
        id:1,
        title: '手机',
        childList: [{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        }]
    },{
        id:2,
        title: '笔记本',
        childList: [{
            name: '笔记本1',
            price: 100000000,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: '笔记本2',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: '笔记本3',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        }]
    },{
        id:3,
        title: '平板',
        childList: [{
            name: '平板',
            price: 100000000,
            imgUrl: '/static/img/iphone6.png'
        }]
    }]
    /*var result = {};
     var id = req.params.id;

     for(var i=0;i<data.length;i++) {
     if(data[i].id == id){
     result = data[i]
     }
     }
     */
    res.json({
        code: 1,
        data:data
    })
})


router.get('/jsonpDemo', function(req, res, next){
    var callback = req.query.callback;
    res.send(callback + '({code:1, msg: "sucess"})')
})




module.exports = router;