# express-demo

I use this project to learn **nodejs** async programming and something about **js** language.
The version of this project's javascript language is ECMAScript2015.

### run this test project

  1. install webpack global
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
  
  4. start compile of webpack
  ```bash
  webpack --progress --colors --watch
  ```
  
  4. use brower to view :
  http://localhost:3000

### routes's function
You can use the file [index.js](https://github.com/zhzhaohanzh/express-demo/blob/master/routes/index.js) to config the url. For example:
  ```javascript
  var user = require('./users');
  router.use('/users', user);
  ```
In this example, you can use localhost:3000/users to view its results in the brower.And you can see the file [users.js](https://github.com/zhzhaohanzh/express-demo/blob/master/routes/users.js) which should be used to writing businesses that you need.
