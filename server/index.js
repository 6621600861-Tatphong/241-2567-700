const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let conn = null;
let users = []; 

const initMysql = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8830
    })
}

// app.get('/testdbnew',async (req, res) => {
//     try{
//         const results = await conn.query('SELECT * FROM users')
//         res.json(results[0])
//     }catch(error){
//         console.log('error', error.message)
//         res.status(500).json({error: 'Error fetching users'})
//     }
// })


// path = GET /users สำหรับ get user ทั้งหมดที่บันทีกไว้
app.get('/users', (req, res) => {
    const filterUsers = users.map(user => {//เก็บข้อมูลที่ต้องการเเสดง
        return{
            id: user.id,//เเสดงเฉพาะ id
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: user.firstname + ' ' + user.lastname
        }
})
    res.json(filterUsers);
})


// path = POST /user ใช้สำหรับการสร้างข้อมูล user ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user)
    console.log('result',results)
    res.json({
        message: 'Create user successfully',
        data: results[0]
    })
})


// path = GET /users สำหรับ get user ทั้งหมดที่บันทีกไว้
app.get('/users', async (req, res) => {
    const result = await conn.query('SELECT  * FROM users')
    res.json(result[0])
})


// path:PUT /users/:id ใช้สำหรับเเก้ไขข้อมูล user โดยใช้ id เป็นตัวระบุ
// get post put ใช้ได้หมด
app.put('/users/:id', (req, res) => {
    let id = req.params.id; 
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id );
    
        users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
        users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
        users[selectedIndex].age = updateUser.age || users[selectedIndex].age;
        users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender
    
    res.json({
        message: 'Update user successfully',
        data:{
            user: updateUser,
            indexUpdated : selectedIndex
        }
    }) 
    res.send(id) 
})



//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id เป็นตัวระบุ
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ user ที่เจอ
    users.splice(selectedIndex, 1);
    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectedIndex
    })
})

app.listen(port, async(req,res) => {
    await initMysql();
    console.log('Http Server is running on port' +port);
});


//cd change directory
//ls list
//pwd print working directory
// cd.. กลับไปที่ directory ก่อนหน้า go back 
// exit ออกจาก terminal
//docker stop <container id> หยุด container
//docker system prune -a ลบ container ทั้งหมด
//docker -compose up รัน container
//docker-compose down หยุด container
