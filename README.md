### dva

dva 是一个基于 React 和 Redux 的轻量应用框架，概念来自 elm，支持 side effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。

###### 安装dva-cli
```
npm install dva-cli -g
```
###### 创建应用
> 创建 dva-quickstart 目录，包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据 mock 服务、代理服务器等功能。

```
dva new dva-quickstart
cd dva-quickstart
npm start
```
在浏览器里打开 http://localhost:8000 ，你会看到 dva 的欢迎界面。

###### UI框架[ant-design]
通过 npm 安装 ``antd`` 和 ``babel-plugin-import`` 。``babel-plugin-import`` 是用来按需加载 antd 的脚本和样式的。
```
npm install antd babel-plugin-import --save
```
编辑 .webpackrc，使 babel-plugin-import 插件生效。
```
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
```
