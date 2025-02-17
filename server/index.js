const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users=[];
let counter = 1;

let conn = null
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    })
}

app.get('/testdbnew',async(req,res)=> {
    try {
        const results = await conn.query('SELECT * FROM users')
        res.json(results[0])
    } catch (err) {
        console.log('error',error.message)
        res.status(500).json({error: 'Error fetching users'})
    }
})

//path = GET /users สำหรับ get users ทั้งหมดที่บันทึกไว้
app.get('/users',(req,res)=>{
    const filterUsers = users.map(user => {
        return {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: user.firstname + ' ' + user.lastname,
        }
    })
    res.json(filterUsers)
})

//path = POST /users สำหรับสร้าง users ใหม่บันทึกเข้าไป    
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: 'Create user successfully',
        user: user
    })
})

//path = GET /users/:id สำหรับดึงข้อมูลราย users คนออกมา
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    //ค้นหา users หรือ index ที่ต้องการดึงข้อมูล
    let selectedIndex = users.findIndex(user => user.id == id)

    res.json(users[selectedIndex])
})


//path: PUT /users/:id สำหรับแก้ไข  users รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id)

        users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firtsname
        users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
        users[selectedIndex].age = updateUser.age || users[selectedIndex].age
        users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender

    res.json({
        message: 'Update user successfully',
        data:{
            user: updateUser,
            indexUpdated: selectedIndex
        }
    })
})

//path: DELETE /users/:id สำหรับลบ users รายคน(ตาม id ที่กำหนด)
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ
    users.splice(selectedIndex, 1)
    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectedIndex
    })
})

app.listen(port, async (req, res)=>{
    await initMySQL();
    console.log('HTTP Server is running on port'+ port);
});