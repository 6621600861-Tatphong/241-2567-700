const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const app = express();

const port = 8000;

app.use(bodyParser.json());

let users = []
let counnter =1

/*GET /users ใช้ในการดึงข้อมูล user ทั้งหมด*/
    app.get('/users', (req, res) => {
    res.json(users);
 }); 


/*POST /user ใช้ในการสร้าง user ใหม่*/
    app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counnter;
    counnter += 1;
    users.push(user);
    res.json({
        message: 'User created successfully',
        user: user
    });
});


/*GET /user/:id ใช้ในการดึงข้อมูล user ตาม id*/
    app.get('/users', (req, res) => {
    res.json(users);
});


/*PUT /user/:id ใช้ในการแก้ไขข้อมูล user โดยใช้ id เป็นตัวระบุ*/
        app.put('/user/:id', (req, res) => {
        let id = req.params.id;
        let updateUser = req.body;
        //หา users จาก id ที่ส่งมา
        let selectIndex = users.findIndex(user => user.id == id);
        
        //แก้ไขข้อมูลใน users ที่เจอ
        if(updateUser.firstname){
            users[selectIndex].firstname = updateUser.firstname;
        }
        if(updateUser.lastname){
            users[selectIndex].lastname = updateUser.lastname;
        }
        res.json({
            message: 'User updated successfully',
            data: {
                user: updateUser,
                idexUpdated: selectIndex
            }
        });
        //users ที่อะพเดทใหม่ อัพเดทกลับเข้าไปเก็บในตัวแปร users
        res.send(id);
    });

/*DELETE /user/:id ใช้ในการลบข้อมูล user โดยใช้ id เป็นตัวระบุ*/
        app.delete('/user/:id', (req, res) => {
        let id = req.params.id;
    //หา idex ของ users ที่ต้องการลบ
        let selectIndex = users.findIndex(user => user.id == id);
        //ลบ users ที่เจอ
        users.splice(selectIndex, 1);
        res.json({
            message: 'User deleted successfully',
            idexDeleted: selectIndex
            
        });
        res.send(id); 
    });


app.listen(port, (req, res) => {
    console.log('Http Server is running on port ' + port );
});

