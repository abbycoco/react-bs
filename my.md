#安装
####1，git clone 'git@github.com:abbycoco/react-bs.git'
####2，进入react-demo 目录，npm install
####3,全局安装跨平台环境变量配置器，
#####npm i cross-env -g
####4,启动，npm run start
#前端端口：http://localhost:9090/
#引用ant-design
地址：https://mobile.ant.design/docs/react/install
###问题1：引入ant-design
####webpack 配置
######把 .web.js 放在 .js 前面就可以
#后端
##使用express,安装
####1,git clone git@github.com:abbycoco/react-bs-api.git
####2,进入目录react-demo-api,npm install
####3,启动，npm start
#后端端口：http://localhost:3000/
##参考文章
http://www.alloyteam.com/2015/03/sexpressmysql/
#问题1->跨域
react-demo-api/app.js/
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9090');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
#前后端连接 
##前端 services->xhr->config->rootpath(http://localhost:3000/)
