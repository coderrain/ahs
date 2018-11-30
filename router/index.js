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
        title: '热门',
        childList: [{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: '华为P10',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: '小米6',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        },{
            name: 'vivo X7',
            price: 435,
            imgUrl: '/static/img/vivo_X7.jpg'
        },{
            name: 'OPPO R9',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        },{
            name: 'iphone6',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: '华为P10',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: '小米6',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        },{
            name: 'vivo X7',
            price: 435,
            imgUrl: '/static/img/vivo_X7.jpg'
        },{
            name: 'OPPO R9',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        },{
            name: 'OPPO R9',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        },{
            name: 'OPPO R9',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        },{
            name: '华为P10',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: '小米6',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        }]
    },{
        id:2,
        title: '华为',
        childList: [{
            name: '华为P10',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: '华为note4',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        },{
            name: '华为 X7',
            price: 435,
            imgUrl: '/static/img/vivo_X7.jpg'
        },{
            name: '华为 R9',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        },{
            name: '华为B12',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: '华为P8',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: '华为9',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        },{
            name: '华为P10',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: '华为note4',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        },{
            name: '华为 X7',
            price: 435,
            imgUrl: '/static/img/vivo_X7.jpg'
        },{
            name: '华为 R9',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        },{
            name: '华为B12',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        },{
            name: '华为P8',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: '华为9',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        }]
    }, {
        id: 3,
        title: '荣耀',
        childList: [{
            name: '荣耀 V10',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        }, {
            name: '荣耀 8X',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        }, {
            name: '荣耀 畅玩4x',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        }, {
            name: '荣耀 青春版',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        }, {
            name: '荣耀 畅玩8c',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        }, {
            name: '荣耀 V10',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        }, {
            name: '荣耀 畅玩4x',
            price: 435,
            imgUrl: '/static/img/vivo_X7.jpg'
        }, {
            name: '荣耀 8X',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        }, {
            name: '荣耀 青春版',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        }, {
            name: '荣耀 畅玩8c',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        }, {
            name: '荣耀 V10',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        }, {
            name: '荣耀 畅玩4x',
            price: 453,
            imgUrl: '/static/img/OPPOR9.png'
        }, {
            name: '荣耀 V10',
            price: 100,
            imgUrl: '/static/img/iphone6.png'
        }, {
            name: '荣耀 P9',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        }]
        },{
            id:4,
            title: '苹果',
            childList: [{
                name: 'iPhone X',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: 'iPhone 6',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            },{
                name: 'iPhone X7',
                price: 435,
                imgUrl: '/static/img/vivo_X7.jpg'
            },{
                name: 'iPhone R9',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            },{
                name: 'iPhone 7',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            },{
                name: 'iPhone 19',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: 'iPhone 23',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            },{
                name: 'iPhone 34',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: 'iPhone 3',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            },{
                name: 'iPhone X7',
                price: 435,
                imgUrl: '/static/img/vivo_X7.jpg'
            },{
                name: 'iPhone R9',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            },{
                name: 'iPhone 5',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            },{
                name: 'iPhone 4',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: 'iPhone 3',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            }]
        },{
            id:5,
            title: '小米',
            childList: [{
                name: '小米 8',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: '小米 6',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            },{
                name: '小米 X7',
                price: 435,
                imgUrl: '/static/img/vivo_X7.jpg'
            },{
                name: '小米 R9',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            },{
                name: '小米 B12',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            },{
                name: '小米 5s',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: '小米 note',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            },{
                name: '小米 8s',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: '小米 6s',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            },{
                name: '小米 X7',
                price: 435,
                imgUrl: '/static/img/vivo_X7.jpg'
            },{
                name: '小米 R9',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            },{
                name: '小米 9s',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            },{
                name: '小米 Max',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: '小米 8SE',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            }]
        },{
            id: 6,
            title: 'OPPO',
            childList: [{
                name: 'OPPO V10',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            }, {
                name: 'OPPO 8X',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            }, {
                name: 'OPPO 畅玩4x',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            }, {
                name: 'OPPO 青春版',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            }, {
                name: 'OPPO 畅玩8c',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            }, {
                name: 'OPPO V10',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            }, {
                name: 'OPPO 畅玩4x',
                price: 435,
                imgUrl: '/static/img/vivo_X7.jpg'
            }, {
                name: 'OPPO 8X',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            }, {
                name: 'OPPO 青春版',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            }, {
                name: 'OPPO 畅玩8c',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            }, {
                name: 'OPPO V10',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            }, {
                name: 'OPPO 畅玩4x',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            }, {
                name: 'OPPO V10',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            }, {
                name: 'OPPO P9',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            }]

    },{
            id:1,
            title: '热门',
            childList: [{
                name: 'iphone6',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            },{
                name: '华为P10',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: '小米6',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            },{
                name: 'vivo X7',
                price: 435,
                imgUrl: '/static/img/vivo_X7.jpg'
            },{
                name: 'OPPO R9',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            },{
                name: 'iphone6',
                price: 100,
                imgUrl: '/static/img/iphone6.png'
            },{
                name: '华为P10',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: '小米6',
                price: 666,
                imgUrl: '/static/img/huaweisf01.png'
            },{
                name: 'vivo X7',
                price: 435,
                imgUrl: '/static/img/vivo_X7.jpg'
            },{
                name: 'OPPO R9',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            },{
                name: 'OPPO R9',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            },{
                name: 'OPPO R9',
                price: 453,
                imgUrl: '/static/img/OPPOR9.png'
            },{
                name: '华为P10',
                price: 2330,
                imgUrl: '/static/img/huaweip10.jpg'
            },{
                name: '小米6',
                price: 666,
                imgUrl: '/static/img/vivo_X7.jpg'
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
            name: '华为P10',
            price: 342,
            imgUrl: '/static/img/huaweisf01.png'
        },{
            name: '华为P10',
            price: 454,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: 'OPPOR9',
            price: 3242,
            imgUrl: '/static/img/OPPOR9.png'
        },{
            name: '小米6',
            price: 666,
            imgUrl: '/static/img/vivo_X7.jpg'
        },{
            name: '华为P10',
            price: 2330,
            imgUrl: '/static/img/huaweip10.jpg'
        },{
            name: '小米6',
            price: 666,
            imgUrl: '/static/img/huaweisf01.png'
        },{
            name: 'vivo X7',
            price: 435,
            imgUrl: '/static/img/vivo_X7.jpg'
        }]
    },{
        id:2,
        title: '笔记本',
        childList: [{
            name: 'MacBook Air',
            price: 10000,
            imgUrl: '/static/img/MacBook Air.png'
        },{
            name: 'MacBook Pro',
            price: 6888,
            imgUrl: '/static/img/MacBook Pro.png'
        },{
            name: 'MateBook E',
            price: 3423,
            imgUrl: '/static/img/MateBook E.png'
        },{
            name: '华为 MateBook X 系列',
            price: 8900,
            imgUrl: '/static/img/MateBook X.png'
        },{
            name: '华为 MateBook',
            price: 6888,
            imgUrl: '/static/img/MateBook.png'
        },{
            name: 'MacBook Air',
            price: 8898,
            imgUrl: '/static/img/MacBook Air.png'
        },{
            name: 'MacBook Pro',
            price: 6888,
            imgUrl: '/static/img/MacBook Pro.png'
        },{
            name: 'MateBook E',
            price: 3423,
            imgUrl: '/static/img/MateBook E.png'
        }]
    },{
        id:3,
        title: '平板',
        childList: [{
            name: 'iPad 1',
            price: 680,
            imgUrl: '/static/img/30763.jpg'
        },{
            name: '华为 MediaPad M2',
            price: 680,
            imgUrl: '/static/img/31227_20180411153912_960.png'
        },{
            name: 'iPad 1',
            price: 680,
            imgUrl: '/static/img/30763.jpg'
        },{
            name: '华为 MediaPad M2',
            price: 680,
            imgUrl: '/static/img/31227_20180411153912_960.png'
        },{
            name: 'iPad 1',
            price: 680,
            imgUrl: '/static/img/30763.jpg'
        },{
            name: '华为 MediaPad M2',
            price: 680,
            imgUrl: '/static/img/31227_20180411153912_960.png'
        },{
            name: 'iPad 1',
            price: 680,
            imgUrl: '/static/img/30763.jpg'
        },{
            name: '华为 MediaPad M2',
            price: 680,
            imgUrl: '/static/img/31227_20180411153912_960.png'
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



router.get('/art/:id', function(req, res, next){
    var id = req.params.id;
    var news = fs.readFileSync('./mock/news.json', 'utf-8');
    var data = JSON.parse(news);
    var result = null;
    for(var i=0;i<data.length;i++) {
        if(data[i].id == id) {
            result = data[i];
        }
    }
    console.log(typeof news)
    res.render('art', {
        data: result
    })
})


router.get('/jsonpDemo', function(req, res, next){
    var callback = req.query.callback;
    res.send(callback + '({code:1, msg: "sucess"})')
})




module.exports = router;