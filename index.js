var students = [];
   var selectedGender = null;
    function setGender(e){
    //   console.log(e.target.value)
    selectedGender = e.target.value
    }
function addStudent(ev){
console.log(ev)
ev.preventDefault();

var Student = {
    parentname :'',
    Mobile :'',
    Email :'',
    studentname :'',
    gender:'',
    classStandard:'',
}
Student.parentname = document.getElementById("parentName").value
Student.Mobile = document.getElementById("Mobile").value
Student.Email = document.getElementById("Email").value
Student.studentname = document.getElementById("StudentName").value
Student.gender = selectedGender
Student.classStandard = document.getElementById("ClassStandard").value

students.push(Student)
console.log(Student)
genTable();
}

function genTable(){
    document.getElementById("tbdy").innerHTML=''
    students.forEach((student)=>{
        var ntr = document.createElement("tr")

        var ptd = document.createElement("td")
        ptd.innerHTML = student.parentname;
        ntr.appendChild(ptd)
    
        var mtd = document.createElement("td")
        mtd.innerHTML = student.Mobile;
        ntr.appendChild(mtd)
    
        var etd = document.createElement("td")
        etd.innerHTML = student.Email;
        ntr.appendChild(etd)
    
        var std = document.createElement("td")
        std.innerHTML = student.studentname;
        ntr.appendChild(std)

        var gtd = document.createElement("td")
        gtd.innerHTML = student.gender;
        ntr.appendChild(gtd)

        var ctd = document.createElement("td")
        ctd.innerHTML = student.classStandard;
        ntr.appendChild(ctd)
    
        document.getElementById("tbdy").appendChild(ntr)
        document.getElementById('formData').reset();
    })
}
    var schoolStudents = [
            {
            studentName : 'Vijay',
            class:'6th',
            parentContact:'9870657786',
            gender:'Male',
            image:'https://c8.alamy.com/comp/EN9HGF/1-indian-kids-boy-school-student-fun-EN9HGF.jpg'
            },
            {
            studentName : 'Anjali',
            class:'5th',
            parentContact:'670657886',
            gender:'Female',
            image:'https://www.pngitem.com/pimgs/m/57-574351_nursery-school-student-png-transparent-png.png'
            },
            {
            studentName : 'Rohit',
            class:'7th',
            parentContact:'8790657745',
            gender:'Male',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbR7k69q8dlgoTO_Gt4TxHOdrRPjnuyYOmQ&usqp=CAU'
            },
            {
            studentName : 'Anushka',
            class:'6th',
            parentContact:'9870657786',
            gender:'Female',
            image:'https://t3.ftcdn.net/jpg/02/77/64/32/360_F_277643257_PPsdvqnnFRGX4RcOGpvnRIQSsNkJbWGq.webp'
            },
            {
                studentName : 'priya',
                class:'3th',
                parentContact:'7890657687',
                gender:'Female',
                image:'https://www.visualsstock.com/images/Low/5/AK58881.jpg'
                },
            ]
   var stddiv = document.getElementById("stddata");
    schoolStudents.forEach(g=>{
        var stddata = document.createElement("div");
       var stdul = document.createElement("ul");
       var imgul = document.createElement("ul");
       
        
        var stdli = document.createElement("li");
        stdli.innerHTML = "StudentName : " + g.studentName;
        stdul.appendChild(stdli);

        var cli = document.createElement("li");
        cli.innerHTML ="Class : " + g.class;
        stdul.appendChild(cli);

        var pli = document.createElement("li");
        pli.innerHTML = "ParentContact : " +g.parentContact;
        stdul.appendChild(pli);

        var gli = document.createElement("li");
        gli.innerHTML = "Gender : " +g.gender;
        stdul.appendChild(gli);

        var stdimg = document.createElement("img")
        stdimg.src = g.image;
        stdimg.style.cssText = 'width:200px'

        stddata.appendChild(stdul) 
        stddiv.appendChild(stddata);
        
        imgul.appendChild(stdimg)
        stddata.appendChild(imgul) 
        
        

        stddata.style.cssText+='border:1px solid ; background:lightblue; width:35% ;padding:10px;margin:10px;'
        stddata.style.cssText+='display:flex; '
        stdul.style.listStyleType= 'none'

    })
    stddiv.style.cssText = 'display:flex ;flex-wrap:wrap ;justify-content:space-evenly'