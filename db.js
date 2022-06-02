var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'myblog'
});
let queryData = function(sql, callback){
  pool.getConnection((err, conn)=>{
    if(err){
      callback(err, null);
    }else{
      conn.query(sql, (err, result)=>{
        callback(err, result);
        conn.release();
      })
    }
  })
}

module.exports = queryData;