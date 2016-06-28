# express-demo

I use this project to learn **nodejs** async programming and something about **js** language.

### run this test project

  1. make this project:
  npm install
  
  2. start this app:
  npm start
  
  3. use brower to view :
  http://localhost:3000

### routes's function
    You can use the file [index.js](https://github.com/zhzhaohanzh/express-demo/blob/master/routes/index.js) to config the url. For example:
     `var user = require('./users');
      router.use('/users', user);`
    In this example, you can use localhost:3000/users to view its results in the brower.And you can see the file [users.js](https://github.com/zhzhaohanzh/express-demo/blob/master/routes/users.js) which should be used to writing businesses that you need.