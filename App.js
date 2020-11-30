var conn = require('./dbConfig.js');
var express = require('express');
var bodyparser = require('body-parser');
const { request, response } = require('express');

var app = express();
app.use(bodyparser.json());

app.listen(3000,()=>console.log("Express server is running in port : 3000"));

//Get ALL
//Select * from accounts join description ON accounts.Emp_code = description.Emp_code where accounts.Emp_code = 001
app.get('/getall',function(request,response) {
    conn.query('Select name_pro,Count(name_pro),Sum(price) from accounts join description ON accounts.Emp_code = description.Emp_code where accounts.Emp_code IN (005,001) Group by name_pro ',function(err,rows,fields){
        if(!err){
            response.send(rows);
        }else{
            response.send(err);
        }
    });
});


//Get 1 person
app.get('/getdata/:id',function(request,response) {
    conn.query('Select * from accounts Where Emp_id = ?',[request.params.id],function(err,rows,fields){
        if(!err){
            response.send(rows);
        }else{
            response.send(err);
        }
    });
});


//insert data
app.post('/insertdata',function(request,response) {
    conn.query('INSERT INTO accounts(Emp_Name, Emp_code, Salary) values(?,?,?)',
    [request.body.Emp_Name, request.body.Emp_code, request.body.Salary],function(err,rows,fields){
        if(!err){
            response.send(rows);
        }else{
            response.send(err);
        }
    });
});

//insert pro
app.post('/insertpro',function(request,response) {
    conn.query('INSERT INTO description(Emp_code, name_pro, price, date) values(?,?,?,?)',
    [request.body.Emp_code, request.body.name_pro, request.body.price, new Date()],function(err,rows,fields){
        if(!err){
            response.send(rows);
        }else{
            response.send(err);
        }
    });
});


//Delete data
app.delete('/deletedata/:id',function(request,response) {
    conn.query('Delete from accounts Where Emp_id = ?',[request.params.id],function(err,rows,fields){
        if(!err){
            response.send(rows);
        }else{
            response.send(err);
        }
    });
});


//Update data
app.put('/updatedata',function(request,response) {
    conn.query('Update accounts set Emp_Name = ?, Emp_code = ?, Salary = ? Where Emp_id = ?',
    [request.body.Emp_Name, request.body.Emp_code, request.body.Salary, request.body.Emp_id],function(err,rows,fields){
        if(!err){
            response.send(rows);
        }else{
            response.send(err);
        }
    });
});

