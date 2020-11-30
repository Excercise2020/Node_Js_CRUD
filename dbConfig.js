var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_crud"
});

conn.connect((err)=>{
    if(!err)
    {
        console.log("Database Connected!.");
    }
    else
    {
        console.log("Database failed Error : "+ JSON.stringify(err,undefined,2));
    }

});

module.exports = conn;
