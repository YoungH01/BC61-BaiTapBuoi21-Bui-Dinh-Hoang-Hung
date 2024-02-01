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
// var sp_thongbao=document.querySelector("sp-thongbao");
// solution check Tai Khoan
tknv.addEventListener("input", function () {
    var str = "";
    var countNumber = 0;
    str = tknv.value;
    if (str.len == 0 || (str.len > 0 && str.len < 6)) {
        tbTKNV.style.display = "block";
        tbTKNV.innerHTML = "Invalid Tai Khoan";
    }

    for (const value of str) {
        if (value >= '0' && value <= '9') {
            countNumber += 1;
        }
    }
    if (countNumber > 6 || countNumber == 0) {
        tbTKNV.style.display = "block";
        tbTKNV.innerHTML = "Invalid Tai Khoan";
    } else tbTKNV.style.display = "none";
});
//solution check name of employee
nameE.addEventListener("input", function () {
    var str = "";
    str = nameE.value;
    if (str.len == 0) {
        tbTen.style.display = "block";
        tbTen.innerHTML = "Invalid Name";
    }

    for (const value of str) {
        if (value < 'A' || value > 'z') {
            tbTen.style.display = "block";
            tbTen.innerHTML = "Invalid Name";
        }
        if (value > 'Z' && value < 'a') {
            tbTen.style.display = "block";
            tbTen.innerHTML = "Invalid Name";
        }
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
    }
    console.log(emailE.value);
});
// solution check password of employee
password.addEventListener("input", function () {
    var str = password.value;
    var countNumber = 0, countAlphabet = 0, countSpecial;
    if (str.len < 6 || str.len > 10) {
        tbMatKhau.style.display = "block";
        tbMatKhau.innerHTML = "Email is not valid";
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
        tbMatKhau.innerHTML = "Email is not valid";
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
    }
    const reString = str.replaceAll("/", "-");
    console.log(reString);
    console.log(isValidDateDDMMYYYY(reString));
    if (!isValidDateDDMMYYYY(reString)) {
        tbNgay.style.display = "block";
        tbNgay.innerHTML = "Date is not valid";
    } else tbNgay.style.display = "none";
})
//solution check basic salary
luongCB.addEventListener("input",function(){
    var salary= Number(luongCB.value);
    if(salary<Math.pow(10,7) || salary>Math.pow(20,7)){
        tbLuongCB.style.display = "block";
        tbLuongCB.innerHTML = "Basic Salary is not valid";
    }else tbLuongCB.style.display = "none";

})






