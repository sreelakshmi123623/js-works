var students=[
    {rolln:1,name:"arya",course:"mca",passout:2023,gender:"female",feePaid:440},
    {rolln:2,name:"arjun",course:"engineering",passout:2024,gender:"male",feePaid:220},
    {rolln:3,name:"devan",course:"bca",passout:2025,gender:"male",feePaid:352},
    {rolln:4,name:"adhithya",course:"bcom",passout:2024,gender:"female",feePaid:150},
    {rolln:5,name:"ansu",course:"bca",passout:2024,gender:"female",feePaid:342},
    {rolln:6,name:"johny",course:"mca",passout:2024,gender:"male",feePaid:132},
    {rolln:7,name:"rohith",course:"mcom",passout:2024,gender:"male",feePaid:440},
    {rolln:8,name:"ami",course:"engineering",passout:2024,gender:"female",feePaid:132},
]

//display all students name

var studentName=students.map(std=>std.name)
console.log(studentName);

//display bcs students name

var bcaStudents = students.filter(std=>std.course=="bca").map(std=>[std.name,std.course])
console.log(bcaStudents);

//display female 2024 passout student
var femaleYearPassout = students.filter(std=>std.gender=="female" && std.passout==2024).map(std=>[std.name,std.gender,std.passout])
console.log(femaleYearPassout);


//feepaid in descending order

var feepaidInDescending = students.sort((std1,std2)=>std2-std1).map(std=>[std.name,std.feePaid])
console.log(feepaidInDescending);

//max feePaid students
var  maxFeePaid=students.reduce((std1,std2)=>std1.feePaid>std2.feePaid?std1:std2).feePaid
var  maximumFeePaidStudent= students.filter(std=>std.feePaid==maxFeePaid)
console.log(maximumFeePaidStudent);

 //minimum feePaid students
var minFeePaid =students.reduce((std1,std2)=>std1.feePaid<std2.feePaid?std1:std2).feePaid
var minFeePaidStudent=students.filter(std=>std.feePaid==minFeePaid)
console.log(minFeePaidStudent);
