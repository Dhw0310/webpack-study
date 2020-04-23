### webpack 基本使用

1. entry 指定 webpack 打包入口文件
   > output 设置 webpack 输出文件位置。output 必须是一个对象,对象中 filename 属性指定输出文件名称,path 指定输出文件目录(绝对路径)

```
 const path = require('path');
 module.export = {
   mode: 'none', // production, development
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.join(__dirname,'output')// output是指文件夹名称
   }
 }
```

TIPS: webpack 智能提示,基于 vscode，如果 VSCode 知道当前变量的类型，就可以给出正确的智能提示

> 通过 import 方式导入 webpack 模块中的 Configuration 类型，然后根据类型注释的方式将变量注为此类型，就会有自动提示了,配置完成之后注释掉。。node 环境下不支持 import

```
import { Configuration } from 'webpack'

/**
 * @type {Configuration}
 */
```

> webpack.config.js 是运行在 node 环境中的 js 文件，按照 common.js 规范来写 <br>

2. webpack 工作模式，默认 production

- production 模式下，启动内置优化插件，自动优化打包结果，打包速度偏慢；
- development 模式下，自动优化打包速度，添加一些调试过程中的辅助插件；
- none 模式下，运行最原始的打包，不做任何额外的处理
  > 修改方式
  - 通过 cli --mode 参数传入
  - 配置文件设置 mode 属性

3.  loader >Webpack 内部默认只能够处理 JS 模块代码，也就是说在打包过程中，它默认把所有遇到的文件都当作 JavaScript 代码进行解析,因此需要 loader 转换

          * css-loader 安装 `npm install css-loader --save-dev`
          * 配置
          ```
          module: {
            rules: [
              {
                test: '/\.css/' // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
                use: 'css-loader'
              }
            ]
          }
          ```
          * css-loader 只会把 CSS 模块加载到 JS 代码中，而并不会使用这个模块。<br>
          * style-loader 的作用,将 css-loader 中加载的所有样式模块，通过创建style标签的方式添加到页面上

    css - css-loader - webpack - bundle.js
    TIPS: 一旦配置多个 loader，执行顺序是从后向前执行

### 执行逻辑简介

1. 打包好代码实际上是一个立即执行函数,传入需要打包的文件数组 modules
2. 执行**webpack_require**函数,如果之前被加载,从缓存中取,如果没被加载，加进 installedModules 中
3. 传入的数组是参数相同的函数，对应源代码当中的模块，被包括在模块中，形成私有作用域
