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
var allStudents=students.map(st=>st.name)
console.log(allStudents);

//display bcs students name

var bcaStudents=students.filter(st=>st.course=="bca").map(st=>[st.name,st.course])
console.log(bcaStudents);


//display female 2024 passout student
console.log("\nfemale 2024 passout student");

var femaleItStudent=students.filter(st=>st.passout==2024 && st.gender=="female").map(st=>st.name)
console.log(femaleItStudent);


//feepaid in descending order

var descending=students.sort((st1,st2)=>st2-st1).map(st=>[st.name,st.feePaid])
console.log(descending);


//max feePaid students

 var maximumFeePaid = students.reduce((st1,st2)=>st1.feePaid>st2.feePaid?st1:st2).feePaid
 var maximumFeePaidSt=students.filter(st=>st.feePaid==maximumFeePaid)
 console.log(maximumFeePaidSt);
 

 //minimum feePaid students

 var minFeePaid=students.reduce((st1,st2)=>st1.feePaid<st2.feePaid?st1:st2).feePaid//for display two students with min fee

 var sameMinFeeSt=students.filter(st=>st.feePaid==minFeePaid)

 console.log(sameMinFeeSt);
 