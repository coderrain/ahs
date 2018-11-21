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


module.exports = router;