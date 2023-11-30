![1](./principle_1.awebp)


### webpack 原理
webpack 的目的其实就是将入口文件打包为一个能在浏览器中运行的文件， 也就是 bundle 文件

那怎么从入口文件转换为 bundle 文件


##### 首先我们会遇到几个问题
1. 语法识别与兼容问题， 例如：ES6 -> ES5
2. 文件间依赖问题
3. 其他类型的文件如 less sass 图片（.png/.jpg......）如何解析
4. 怎么合成最终文件

为了解决这些问题， 那么就要对入口文件进行解析， 这个就需要我们熟悉的 Babel 模块，而文件的依赖树的构建是基于 js 中 import  require 等导入语句识别的

##### 常见的 babel 模块
- `@babel/parser` 将 js 解析成 抽象语法书（AST）
- `@babel/traverse` 这个模块允许您在 AST 中进行深度遍历，并对其进行修改、添加或删除节点，以实现对代码的定制化处理和转换。
- `@babel/core` 解决 js 代码语法的兼容性问题
- `@babel/preset-env` 可以通过配置目标环境，例如目标浏览器版本，自动选择适当的 babel 插件和转换规则，从而确保做到环境的最佳兼容

怎么处理最后一个问题， 就是其他类型的资源文件， 这个时候就需要 loader 了

##### 常见的loader
- babel-loader 将新版本 js 转换为旧版本 js，确保兼容性
- less-loader sass-loader style-loader css-loader 处理 css 样式
- file-loader 处理图片 字体等资源文件
- eslint-loader
- svg-url-loader 处理 svg
- react-loader vue-loader jsx-loader

##### 依赖树
![模块依赖](./principle_2.png)



##### 合成最终输出文件 bundle
```js
const path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname),
  entry: {
    a: "./src/index-a.js",
    b: "./src/index-b.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
  },
  devtool: false,
  target: "web",
  plugins: [],
};

```
实例配置中有两个入口，对应的文件结构：
![模块依赖](./principle_4.awebp)

生成的 chunks 结构为：
![模块依赖](./principle_3.awebp)

其中 c.js 被共同应用  这个也就是  CommonsChunkPlugin 、SplitChunksPlugin 优化之处

##### 插件
插件开发者可以在各阶段的钩子回调中，插入特定代码，以此达到修改最终输出文件的目的， 这个钩子其实有点类似 vue 中的生命周期钩子函数。