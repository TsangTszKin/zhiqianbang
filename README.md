#开发说明

##1、搭建开发环境
> 此项目开发需要用到webpack构建工具，需要安装npm命令，用于运行开发环境和打包。

1. 安装Node.js，npm命令包含于Node.js中，所以第一步是安装Node.js，下载地址：https://nodejs.org/en/download/，8.0以上版本均可

2. 在命令行环境中cd到项目根目录，执行命令

	npm install #下载依赖模块，此命令可能要几分钟时间
	npm run dev #运行项目
	npm build   #打包

##2、目录结构
|--css/  样式文件<br>
|--dist/ 打包生成的文件<br>
|--img/  图片<br>
|--js/   第三方js文件<br>
|--node_modules/  npm依赖模块下载位置<br>
|--src/  项目代码<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--components/  小零件<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--config/      配置信息、环境参数<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--layouts/     布局文件<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--pages/       页面主要文件<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--utils/      通用工具类<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--auth.js 身份验证<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--main.js 程序入口<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--router.js 路由<br>
|--index.html 主页<br>
|--package.json 项目依赖配置<br>
|--webpack.config.js 项目运行和打包配置脚本<br>

