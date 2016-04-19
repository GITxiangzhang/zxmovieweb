var express=require('express')
var path=require('path')
var bodyParser = require('body-parser')
var port=process.env.PORT||3000
var app= express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser.urlencoded({extended: false }))
app.use(express.static(path.join(__dirname,"bower_components")))
app.listen(port)

console.log("web started on port"+port)

//index
app.get('/',function(req,res){
  res.render('index',{
  	title:'ZX首页',
  	movies:[{
  		title:'机械迷城',
        _id:1,
        poster:'http://img.mukewang.com/570b06920001114b06000338-240-135.jpg',
  	},{
  		title:'机械迷城',
        _id:2,
        poster:'http://img.mukewang.com/570b06920001114b06000338-240-135.jpg',
  	},{
  		title:'机械迷城',
        _id:3,
        poster:'http://img.mukewang.com/570b06920001114b06000338-240-135.jpg',
  	},{
  		title:'机械迷城',
        _id:4,
        poster:'http://img.mukewang.com/570b06920001114b06000338-240-135.jpg',
  	},{
  		title:'机械迷城',
        _id:5,
        poster:'http://img.mukewang.com/570b06920001114b06000338-240-135.jpg',
  	}]
  })

})
app.get('/movie/:id',function(req,res){
  res.render('detail',{
  	title:'详情页',
  	movie:{
  		flash:'http://v2.mukewang.com/cad06b14-fd3e-4b9c-8019-d2a167a2ba79/L.mp4?auth_key=1461048139-0-0-502fa4b67f74aaf7663bd4c20681a466',
  		title:'机械迷城',
  		doctor: '唐成浩',
  		country:'中国',
  		language:'汉语',
  		year:'1992',
  		summary:'本课程适合从事前端开发 2～3 年，已掌握基础的 html/css/javascript/jQuery 技能，对nodejs、express、mongodb、jade 模板引擎等流行技术有或多或少了解，但实践不多的初中级前端工程师。',
  	}
  })

})
app.get('/admin/movie',function(req,res){
  res.render('admin',{
  	title:'后台录入页',
  	movie:{
        flash:'',
  	    title:'',
  		doctor: '',
  		country:'',
  		language:'',
  		year:'',
  		summary:'',
  		poster:'',

  	}
  })

})
app.get('/admin/list',function(req,res){
  res.render('list',{
  	title:'列表页',
  	movies:[{
  		flash:'http://www.imooc.com/video/1226',
  		title:'机械迷城',
  		doctor: '唐成浩',
  		country:'中国',
  		language:'汉语',
  		year:'1992',
  		summary:'本课程适合从事前端开发 2～3 年，已掌握基础的 html/css/javascript/jQuery 技能，对nodejs、express、mongodb、jade 模板引擎等流行技术有或多或少了解，但实践不多的初中级前端工程师。',
  		_id:1,
  		poster:'http://img.mukewang.com/570b06920001114b06000338-240-135.jpg'
  	}]
  })

})