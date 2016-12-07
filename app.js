var express = require('express');
var swig = require('swig');
var routes = express.Router();
var mongoose = require('mongoose');
var app = express();
//设置模板引擎
//第一个参数模板引擎的名称也是后缀，第二个是解析模板的方法
app.engine('html',swig.renderFile);
//设置模板目录
app.set('views','./view');
//注册模板引擎极其名称
app.set('view engine','html');
//禁用模板缓存
swig.setDefaults({cache:false})

//根据模块匹配路由
app.use('/admin',require('./routers/admin'));
//app.use('/api',require('./routers/api'));
//app.use('/',require('./router/main'));
mongoose.connect('mongodb://localhost:27018/blog',function (err) {
    if(err){
        console.log("失败");
    }else {
        console.log("成功");
        app.listen(8081);
    }
});

