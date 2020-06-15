const express = require('express') ;
const app = express() ;
const path = require('path') ;

app.use(express.static(path.resolve(__dirname, 'public'))) ; // 將public底下所有靜態檔可讓前端存取

app.listen(3000) ;