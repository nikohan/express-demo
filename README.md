# express-demo

It use this project to learn **nodejs** async programming and something about **js** language.
The version of this project's javascript language is ECMAScript2015.
It use the express which is a web framework of nodejs.You can learn express from https://github.com/expressjs/express.

### Run this test project

1. If you want to run react+nodejs demo. You should install webpack global first.
  ```bash
  npm install webpack -g
  ```

2. make this project:
  ```bash
  npm install
  ```
  
3. start this app:
  ```bash
  npm start
  ```
  
4. start compile of webpack when you want to run react+nodejs demo
  ```bash
  webpack --progress --colors --watch
  ```
  
5. use brower to view :
  http://localhost:3000

### Routes's function
You can use the file [index.js](https://github.com/zhzhaohanzh/express-demo/blob/master/routes/index.js) to config the url. For example:
  ```javascript
  var user = require('./users');
  router.use('/users', user);
  ```
In this example, you can use localhost:3000/users to view its results in the brower.And you can see the file [users.js](https://github.com/zhzhaohanzh/express-demo/blob/master/routes/users.js) which should be used to writing businesses that you need.

### Tips
* see the dependencies of global npm:
```bash
npm list -g --depth=0
```
* use the module cnpm to install module in china.
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
OR
npm config set registry https://registry.npm.taobao.org
```
not to use taobao's registry
```bash
npm config set registry https:// r.cnpmjs.org
```