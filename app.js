//express_demo.js 文件
const express = require('express');
const history = require("connect-history-api-fallback")
const bodyParser = require("body-parser");


const router = require('./router');
const app = express();

app.use(history())
// app.use(bodyParser.json());
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({ limit:'100mb', extended: true }));
app.use(router)
app.use(express.static("./public"))
app.use("/static", express.static("./static"))


app.listen(3000, function () {
  console.log("应用实例，访问地址为 http://localhost:3000")
})
