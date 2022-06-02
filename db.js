var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'myblog'
});
let queryData = function(sql,value, callback){
  pool.getConnection((err, conn)=>{
    if(err){
      callback(err, null);
    }else{
      conn.query(sql,value, (err, result)=>{
        callback(err, result);
        conn.release();
      })
    }
  })
}

module.exports = queryData;