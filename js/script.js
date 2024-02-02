var tknv = document.querySelector("#tknv");
var tbTKNV = document.querySelector("#tbTKNV");
var nameE = document.querySelector("#name");
var tbTen = document.querySelector("#tbTen");
var emailE = document.querySelector("#email");
var tbEmail = document.querySelector("#tbEmail");
var password = document.querySelector("#password");
var tbMatKhau = document.querySelector("#tbMatKhau");
var datepicker = document.querySelector("#datepicker");
var tbNgay = document.querySelector("#tbNgay");
var luongCB=document.querySelector("#luongCB");
var tbLuongCB=document.querySelector("#tbLuongCB");
var chucvu=document.querySelector("#chucvu");
var tbChucVu=document.querySelector("#tbChucVu");
var gioLam=document.querySelector("#gioLam");
var tbGiolam=document.querySelector("#tbGiolam");
var btnThemNV=document.querySelector("#btnThemNV");
var tableDanhSach =document.querySelector("#tableDanhSach");
var btnCapNhat=document.querySelector("#btnCapNhat");
var btnTimNV=document.querySelector("#btnTimNV");
var searchName=document.querySelector("#searchName");
var checkValid1=false,checkValid2=false,checkValid3=false,checkValid4=false;
var checkValid5=true,checkValid6=false,checkValid7=false,checkValid8=false;
var employee=[

];

// solution check Tai Khoan
tknv.addEventListener("input", function () {
    var str = "";
    var countNumber = 0;
    str = tknv.value;
    if (str.len == 0 || (str.len > 0 && str.len < 6)) {
        tbTKNV.style.display = "block";
        tbTKNV.innerHTML = "Invalid Tai Khoan";
        checkValid1=false;
    }
    for (const value of str) {
        if (value >= '0' && value <= '9') {
            countNumber += 1;
        }
    }
    if (countNumber > 6 || countNumber == 0) {
        tbTKNV.style.display = "block";
        tbTKNV.innerHTML = "Invalid Tai Khoan";
        checkValid1=false;
    } else{
        tbTKNV.style.display = "none";
        checkValid1=true;
    }
    // 
    for(let i=0 ;i<employee.length;i++){
        if(employee[i].account==str){
            tbTKNV.style.display = "block";
            tbTKNV.innerHTML = "Tài khoản này đã được sử dụng";
            checkValid1=false;
            break;
        }
    }
});
//solution check name of employee
nameE.addEventListener("input", function () {
    var str = "";
    str = nameE.value;
    var flag=true;
    if (str.len == 0) {
        tbTen.style.display = "block";
        tbTen.innerHTML = "Invalid Name";
        checkValid2=false;
    }
    for (const value of str) {
        if (value < 'A' || value > 'z') {
            // tbTen.style.display = "block";
            // tbTen.innerHTML = "Invalid Name";
            flag=false;;
        }
        if (value > 'Z' && value < 'a') {
            // tbTen.style.display = "block";
            // tbTen.innerHTML = "Invalid Name";
            flag=false;
        }
    }
    if(flag==true){
        tbTen.style.display = "none";
        checkValid2=true;
    }
    else{
        tbTen.style.display = "block";
        tbTen.innerHTML = "Invalid Name";
        checkValid2=false;
    }

})
// solution check email of employee
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLowerCase());
}
emailE.addEventListener("input", function () {
    var isValid = validateEmail(emailE.value);
    if (!isValid) {
        tbEmail.style.display = "block";
        tbEmail.innerHTML = "Email is not valid";
        checkValid3=false;
    }else{
        tbEmail.style.display = "none";
        checkValid3=true;
    }
    // console.log(emailE.value);
});
// solution check password of employee
password.addEventListener("input", function () {
    var str = password.value;
    var countNumber = 0, countAlphabet = 0, countSpecial;
    if (str.len < 6 || str.len > 10) {
        tbMatKhau.style.display = "block";
        checkValid4=true;
        tbMatKhau.innerHTML = "password is not valid";
    }
    for (const value of str) {
        if (value >= '0' && value <= '9') countNumber += 1;
        if (value >= 'a' && value <= 'z') countAlphabet += 1;
        if (value >= 'A' && value <= 'Z') countAlphabet += 1;
        if (value >= '!' && value <= '/') countSpecial += 1;
        if (value >= ':' && value <= '@') countSpecial += 1;
        if (value >= '[' && value < 'A') countSpecial += 1;
        if (value > 'Z') countSpecial += 1;
    }
    if (countAlphabet == 0 || countNumber == 0 || countSpecial == 0) {
        tbMatKhau.style.display = "block";
        tbMatKhau.innerHTML = "password is not valid";
        checkValid4=false;
    }else{
        checkValid4=true;
        tbMatKhau.style.display ="none";
    }
});
// solution check date work of employee
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function isValidDateDDMMYYYY(dateString) {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (!dateRegex.test(dateString)) {
        return false;
    }

    const [day, month, year] = dateString.split("-");

    // Check for valid day and month ranges
    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return false;
    }

    // Handle month-specific day ranges
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
        daysInMonth[1] = 29; // February in a leap year
    }
    if (day > daysInMonth[month - 1]) {
        return false;
    }

    return true;
}
datepicker.addEventListener("input", function () {
    var str = datepicker.value;
    if (str.len == 0) {
        tbNgay.style.display = "block";
        tbNgay.innerHTML = "Date is not valid";
        checkValid5=false;
    }
    const reString = str.replaceAll("/", "-");
    // console.log(reString);
    // console.log(isValidDateDDMMYYYY(reString));
    if (!isValidDateDDMMYYYY(reString)) {
        tbNgay.style.display = "block";
        tbNgay.innerHTML = "Date is not valid";
        checkValid5=false;
    } else{
        tbNgay.style.display = "none";
        checkValid5=true;
    }
})
//solution check basic salary
luongCB.addEventListener("input",function(){
    var salary= Number(luongCB.value);
    if(salary<Math.pow(10,7) || salary>Math.pow(20,7)){
        tbLuongCB.style.display = "block";
        tbLuongCB.innerHTML = "Basic Salary is not valid";
        checkValid6=false;
    }else{
        tbLuongCB.style.display = "none";
        checkValid6=true;
    }
});
// solution check position
chucvu.addEventListener("input",function(){
    if(chucvu.value!="Sếp" && chucvu.value!="Trưởng phòng" && chucvu.value!="Nhân viên"){
        tbChucVu.style.display = "block";
        tbChucVu.innerHTML = "position is not valid";
        checkValid7=false;
    }else{
        tbChucVu.style.display = "none";
        checkValid7=true;
    }
});
//solution check Work time
gioLam.addEventListener("input",function(){
    var timeWork= Number(gioLam.value);
    if(timeWork<80 || timeWork>200){
        tbGiolam.style.display = "block";
        tbGiolam.innerHTML = "WorkTime is not valid";
        checkValid8=false;
    }else{
        tbGiolam.style.display = "none";
        checkValid8=true;
    }
});

// solution add Employee
function renderEmployee(arr){
    var content="";
    for(let i=0;i<arr.length;i++){
        var stringEmployee=`
        <tr>
            <th>${arr[i].account}</th>
            <th>${arr[i].fullName}</th>
            <th>${arr[i].email}</th>
            <th>${arr[i].dateWork}</th>
            <th>${arr[i].pos}</th>
            <th>${arr[i].salary}</th>
            <th>${arr[i].typeE}</th>
            <th>
            <button onclick="deleteEmployee('${
                arr[i].account
              }')" class="btn btn-danger">Xoá</button>
            <button onclick="getInfoEmployee('${
                arr[i].account
              }')" class="btn btn-warning ml-2" data-toggle="modal"
              data-target="#myModal">Sửa</button>
            </th>
        </tr>
        `;
        content+=stringEmployee;
    }
    tableDanhSach.innerHTML=content;
}
function addEmployee(){
    var fSalary=Number(luongCB.value);
    var fType="Trung bình";
    if(Number(gioLam.value)>=160) fType="Khá";
    if(Number(gioLam.value)>=176) fType="Giỏi";
    if(Number(gioLam.value)>=192) fType="Xuất sắc";
    if(chucvu.value=="Sếp") fSalary*=3;
    if(chucvu.value=="Trưởng phòng")fSalary*=2;
   employee.push({
        account:tknv.value,
        fullName:nameE.value,
        email:emailE.value,
        pass:password.value,
        dateWork:datepicker.value,
        salary:Number(luongCB.value),
        pos:chucvu.value,
        timeW:Number(gioLam.value),
        sumSalary:fSalary,
        typeE:fType
   });
}
btnThemNV.addEventListener("click",function(){
//     if(checkValid==false) return;
//     var fSalary=Number(luongCB.value);
//     var fType="Trung bình";
//     if(Number(gioLam.value)>=160) fType="Khá";
//     if(Number(gioLam.value)>=176) fType="Giỏi";
//     if(Number(gioLam.value)>=192) fType="Xuất sắc";
//     if(chucvu.value=="Sếp") fSalary*=3;
//     if(chucvu.value=="Trưởng phòng")fSalary*=2;
//    employee.push({
//         account:tknv.value,
//         fullName:nameE.value,
//         email:emailE.value,
//         pass:password.value,
//         dateWork:datepicker.value,
//         salary:Number(luongCB.value),
//         pos:chucvu.value,
//         timeW:Number(gioLam.value),
//         sumSalary:fSalary,
//         typeE:fType
//    });
        // console.log(checkValid1);
        // console.log(checkValid2);

        // console.log(checkValid3);

        // console.log(checkValid4);

        // console.log(checkValid5);
        // console.log(checkValid6);

        // console.log(checkValid7);

        // console.log(checkValid8);
        if(checkValid1==false ||checkValid2==false || checkValid3==false || checkValid4==false) return;
        if(checkValid5==false ||checkValid6==false || checkValid7==false || checkValid8==false) return;
        addEmployee();
        renderEmployee(employee);
        document.getElementById('formQLE').reset();
});
function deleteEmployee(tk){
    for(let i=0;i<employee.length;i++){
        if(employee[i].account==tk){
            employee.splice(i, 1);
            break;
        }
    }
    renderEmployee(employee);
}
function getInfoEmployee(tk){
    var em;
    for(let i=0;i<employee.length;i++){
        if(employee[i].account==tk){
            em=employee[i];
        }
    }
    // console.log(em);
    var inputArr= document.querySelectorAll('#formQLE input, #formQLE select');
    // for(let i=0;i<inputArr.length;i++){
    //     console.log(inputArr[i]);
    //     var id = inputArr[i].id;
    //     console.log(id);
    //     inputArr[i].value=em[id];
    // }
    //console.log(inputArr);
    inputArr[0].value=em.account;
    inputArr[1].value=em.fullName;
    inputArr[2].value=em.email;
    inputArr[3].value=em.pass;
    inputArr[4].value=em.dateWork;
    inputArr[5].value=em.salary;
    inputArr[6].value=em.pos;
    inputArr[7].value=em.timeW;
    document.getElementById('tknv').readOnly = true;
}
btnCapNhat.addEventListener("click",function(){
    if(checkValid1==false ||checkValid2==false || checkValid3==false || checkValid4==false) return;
    if(checkValid5==false ||checkValid6==false || checkValid7==false || checkValid8==false) return;
    var fSalary=Number(luongCB.value);
    var fType="Trung bình";
    if(Number(gioLam.value)>=160) fType="Khá";
    if(Number(gioLam.value)>=176) fType="Giỏi";
    if(Number(gioLam.value)>=192) fType="Xuất sắc";
    if(chucvu.value=="Sếp") fSalary*=3;
    if(chucvu.value=="Trưởng phòng")fSalary*=2;
    var emArr=[
        {   
            account:tknv.value,
            fullName:nameE.value,
            email:emailE.value,
            pass:password.value,
            dateWork:datepicker.value,
            salary:Number(luongCB.value),
            pos:chucvu.value,
            timeW:Number(gioLam.value),
            sumSalary:fSalary,
            typeE:fType
        }
    ];
    console.log(emArr);
    for(let i=0;i<employee.length;i++){
        var employeeTrongMang = employee[i];
        console.log(employeeTrongMang);
        console.log(emArr[0].account);
        if(emArr[0].account==employeeTrongMang.account){
            employee[i]=emArr[0];
            console.log(employee[i]);
        }
    }
    renderEmployee(employee);
    document.getElementById('tknv').readOnly = false;
    document.getElementById('formQLE').reset();
});
btnTimNV.addEventListener("click",function(){
    var typeNV=searchName.value.trim();
    var result = typeNV.charAt(0).toUpperCase() + typeNV.slice(1);
    if(result!="Trưởng phòng" &&result!="Sếp" &&result!="Nhân viên") return;
    var fillerEmployee=[];
    for(let i=0;i<employee.length;i++){
        if(employee[i].pos==typeNV){
            fillerEmployee.push(employee[i]);
        }
    }
    renderEmployee(fillerEmployee);
});






