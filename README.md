## loadenvjs

一个加载环境变量的库

> 部分代码引自 [dotenv](https://github.com/motdotla/dotenv) 。

### 安装

```bat
npm install --save loadenvjs
```

```js
var envjs = require('loadenvjs')
var env = envjs()

console.log(env)
// console.log(process.env)

```

### api

 + **envjs(options)** 加载配置文件，默认 `.env.js`
   
   - **options.path** 定义配置文件路径，默认读文本，如果为 `.js` 后缀，则返回 `require('xxx.js')`
   - **options.encoding** 读取文件编码
   - **options.globalName** 挂载global的变量名，如果不写，则挂载在 `process.env`
   - **options.mount** 是否挂载到process对象，默认true

> 注：
> 1、挂载在 `process.env` 的值都为字符串类型
> 2、如果是`.js`的文件，请 `return {}` 返回配置信息
