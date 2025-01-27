/*
//console.log('hello world');
//console.log('hello worlddddddd');

//prompt('What is your name?'); 

//- ประกาศตัวแปร string number boolean object array -//

//String//
let firstname = 'John';
const idcard = '1234'; //ไม่สามารถเปลี่ยนค่าได้
console.log(firstname);

//number//
let age = 25;
let height = 180.5;

//boolean//
let isStudent = true;
firstname = 'xxxx';
//idcard = '5555';
console.log('my name is ' , firstname , 'and i am' , age , 'year old.' );
console.log

*/
/*

--เครื่องหมายทางคณิตศาสตร์--
+ บวก (หรือต่อ string)
- ลบ
* คูณ
/ หาร
% หารเอาเศษ (mod)
------------------------

--เครื่องหมายเปรียบเทียบ--
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ
----------------------

*/

/*
let number1 = 5;
let number2 = 5;

//เก็บผลลัพธ์ไว้ในตัวแปร result
let condition1 = number1 >= number2; //boolean ค่าออกมาเป็น true/false  
console.log('result of condition is ',condition1);
*/

// if else condition

/*
>=80 A
>=70 B
>=60 C
>=50 D
<50 F
*/

/*
let score = prompt('Enter your score?'); //รับค่าจากผู้ใช้
console.log('Your score is ' + score);
if (score >= 80){  
        console.log('Grade A');
} else if (score >= 70){ 
        console.log('Grade B');
} else if (score >= 60){
        console.log('Grade C');
} else if (score >= 50){
        console.log('Grade D');
} else {
        console.log('Grade F');
}    
*/

/*
&& และ
|| หรือ
! ไม่
*/

/*
let number1 = 10;
let number2 = 20;

//true || false = !(true) = false
let condition1 != (number1 >= 3 || number2 >= 10); 
console.log('result of condition is' , condition1);

let age = 30;
let gender = 'male';

// true && true = true
if (age >= 18 && gender == 'male'){
    console.log('You are male adult');
}
*/

/*
let number1 = 25;

if(!(number1 % 2 == 0)){
    console.log('Even Number');
}
*/

/*
while loop
for loop
*/

/*
let counter = 0;


while(counter < 10){ //เงื่อนไข ถ้าเป็นจริงจะทำงาน
    console.log('while loop');
    counter = counter + 1;
}

for(let counter = 0; counter < 10; counter ++){
    console.log('For  loop');
}
*/

/*
//Array
let age1 = 12;
let age2 = 14;
let age3 = 16;
let age4 = 18;
let age5 = 20;
console.log(age1,age2,age3,age4,age5);

let ages = [90,60,40,45,50];
console.log(ages);
ages.sort();
console.log(ages);

let name_list = ['John','Jane','Jim','Jenny'];
name_list.push('Jack');
console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[2]);

for( index = 0; index <= name_list.length; index++){
    console.log (name_list[index]);
}

*/

/*
let ages =[30,35,45,50];
if(ages.includes(50)){
    console.log('Found');
}else{
    console.log('Not found');
}
*/

/*
let ages = [12,15,16,18,20];
console.log('new array',ages[2]);
console.log('age list',ages);

//แทนที่ข้อมูลใน array
ages = [45,50];
console.log('new age',ages);

//ต่อข้อมูลใน array
ages.push(55);
console.log('new age',ages);

//ลบท้ายข้อมูลใน array
ages.pop();
console.log('new age',ages);
*/

// Object

/*
let student =[
{
    name: 'wester',
    age:  100,
    grade: 'A'
}, {
    name:  'jane',
    age: 68,
    grade: 'B'
}];

/*
student.push ({
    name: 'Wutson',
    age: 37,
    grade: 'A'
}); 
*/

/*
student.pop();


for (let index = 0; index < student.length; index++){
    console.log('Student Number: ',index+1);
    console.log(student[index].name);
    console.log(student[index].age);
    console.log(student[index].age);
}
*/

/* Object + Array


let score1 = 50;
let score2 = 90;
let grade = '';
//ประกาศฟังก์ชัน calculateGrade ที่รับค่า score เข้ามา
function calculateGrade(score){
    if (score >= 80){  
        grade = 'A';
    } else if (score >= 70){ 
        grade = 'B';
    } else if (score >= 60){
        grade = 'C';
    } else if (score >= 50){
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade
}  
let student1 = calculateGrade(score1);
let student2 = calculateGrade(score2);
console.log('Grade :  ',student1,student2);

*/

/*Array

let score = [10,20,30,40,50];
for (let index = 0; index < score.length; index++){
    console.log(score[index]);
}


//เพิ่มค่าใน array
score[0] = score[0] * 2;
score[1] = score[1] * 2;
score[2] = score[2] * 2;
score[3] = score[3] * 2;
score[4] = score[4] * 2;
//ผลลัพธ์ เท่ากัน แต่สั้นกว่า
score = score.map((s) =>{
    retuen s * 2 ;
})

score.forEach((s) => {
console.log('score',s);
}) 
let scores = [10,20,30,40,];
// let newScores = [];

for (let index = 0; index < scores.length; index++){
    console.log('Score',scores[index]);

//    if(scores[index] >= 30){
//        newScores.push(scores[index]);
//    }
}
//.filter คือการกรองข้อมูล
let newScores = scores.filter((s) => {
    return s >= 20;
}) 

newScores.forEach((ns) => {
    console.log('New Score',ns);
})
*/

/* Object + function*/

let students = [
    {
        name: 'John',
        score: 80,
        grade: 'A'
    },
    {
        name: 'Jane',
        score: 75,
        grade: 'B'
    },
    {
        name: 'Jim',
        score: 60,
        grade: 'C'
    }

]
let student = students.find((s) => {
    if (s.name == 'Jane'){
        return true
    }

})
let doublescore_student = students.map((s) => {
    s.score = s.score*2;
})

let hightscore_student = students.filter((s) => {
    if(s.score > 80){
        return true;
    }
})
console.log('student',student);
console.log('hightscore_student',hightscore_student);
