## 说明
本项目Fork了百度的KityFormula，并修正了一些影响程序启动的微小bug，并且给部分代码加入了注释，以期能够更好的学习百度KityFormult公式编辑器。在此向原作者致敬以及深深谢意！

## 启动项目
你需要一个`http-server`来查看本项目。
1. 安装nodejs
2. 执行`npm install -g http-server`
3. 执行`http-server`并按提示在浏览器中打开相应的地址


### 打包项目

> 注意：你完全没有发要这样做，本节仅仅是为了帮助我们了解作者的思想。

项目的index.html存在以下注释`<!--<script src="dist/kf-editor.all.js"></script>-->`，其实这个注释中的`dist/kf-editor.all.js`是通过一个叫做grunt的工具打包而成的。而grunt工具又依赖于nodejs。所以猜想作者当前给的index.html代码是开发阶段的代码。而最终的生产环境是需要将项目打包为kf-editor.all.js，并且注释到index.html中类似于`<script src="dev-lib/dev-define.js"></script>`的代码的。

如果你想体验该过程(意义不大，毕竟grunt官方已经弃用了自己)，则可以按以下步骤执行：

1. 安装nodejs。
2. 分别执行：`npm install`、`npm install -g grunt-cli`命令。
3. 执行`grunt`命令。此时将自动生成dist文件夹，在该文件夹中生成`kf-editor.all.js以`及`kf-editor.all.min.js`两个核心文件.
4. 启用index.html中的`<!--<script src="dist/kf-editor.all.js"></script>-->`一行，并且删除或注释掉其类似于`<script src="dev-lib/dev-define.js"></script>`这样的代码.
5. 执行`http-server`来启动服务并在浏览器中查看效果。



## 官方原说明如下
KityFormula Editor
=======
基于 SVG 的公式编辑器，百度前端富应用小组开发

当前文档工作未完善，有疑惑之处请发邮件联系我们。

email:kity@baidu.com