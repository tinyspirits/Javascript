const reader = new FileReader();

// function reset 
function functionReset() {
    document.getElementById("formR").reset();
    location.reload();
}

// alert refuse
function refuse(inputName, labelName) {
    labelName.innerHTML = "&#8861;";
    labelName.style.color = "red";
    inputName.style.border = "1px solid red";
}

// alert agree
function agree(inputName, labelName) {
    labelName.innerHTML = "&checkmark;";
    labelName.style.color = "lightgreen";
    inputName.style.border = "1px solid lightgreen";
}

//function load image
function convertImg(image) {
    const imageUpload = document.getElementById(image);
    reader.addEventListener("load", function () {
        // convert image file to base64 string
        imageUpload.src = reader.result;
    }, false);
}
function imageLoad() {
    const titleImg = document.getElementsByClassName("centered")[0];
    const image = convertImg("imageUpload");
    var formData = new FormData();
    var file = document.getElementById("imgLoad").files[0];
    formData.append("Filedata", file);
    var t = file.type.split('/').pop().toLowerCase();

    if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
        alert('Please select a valid image file');
        document.getElementById("imgLoad").value = '';
        return false;
    } else {
        reader.readAsDataURL(file);
        titleImg.style.display = "none";
        return true;
    }
}

//check email
function checkEmail() {
    const regexEmail = /^[^<>()[\]\\,;:\%\_\.\*\{\}\[\]\|\/\+\=\?\'#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,3}))$/;
    let inputEmail = document.getElementById("inputEmail");
    let emailAlert = document.getElementById("emailAlert");
    let checkRegex = regexEmail.test(inputEmail.value);

    if (checkRegex) {
        agree(inputEmail, emailAlert);
        return true;
    } else {
        refuse(inputEmail, emailAlert);
        return false;
    }
}

//function check input name
function processInputName(idName, idInput) {
    const lowercaseRegex = /[a-z]|á|à|ạ|ã|ả|ă|ắ|ằ|ẳ|ặ|ẵ|â|ấ|ầ|ẫ|ẩ|ậ|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ể|ễ|ệ|ì|í|ĩ|ị|ỉ|ò|ó|ỏ|õ|ọ|ô|ố|ồ|ộ|ổ|ỗ|ơ|ớ|ờ|ở|ợ|ỡ|ú|ù|ủ|ụ|ũ|ư|ứ|ừ|ữ|ử|ự|ý|ỳ|ỹ|ỵ|ỷ|đ/g;
    const uppercaseRegex = /[A-Z]|Á|À|Ạ|Ã|Ả|Ă|Ắ|Ằ|Ẳ|Ặ|Ẵ|Â|Ấ|Ầ|Ẫ|Ẩ|Ậ|É|È|Ẽ|Ẻ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ì|Í|Ĩ|Ị|Ỉ|Ò|Ó|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ộ|Ổ|Ỗ|Ơ|Ớ|Ờ|Ở|Ợ|Ỡ|Ú|Ù|Ủ|Ụ|Ũ|Ư|Ứ|Ừ|Ữ|Ử|Ự|Ý|Ỳ|Ỹ|Ỵ|Ỷ|Đ/g;
    const findNumber = /[0-9]/g;
    const specialCharacter = /\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\[|\}|\]|\||\\|\:|\;|\"|\'|\<|\,|\>|\.|\?|\//;
    let inputName = document.getElementById(idInput);
    let alertName = document.getElementById(idName);
    var text = inputName.value.trim();
    var checkValue;

    if (inputName.value == "") {
        inputName.style.border = "1px solid red";
        alertName.innerHTML = "&#8861;";
        alertName.style.color = "red";
        return false;
    } else {
        for (let i = 0; i < text.length; i++) {
            if (text[i] != /\s/g && text[i] == text[i].match(findNumber) || text[i] == text[i].match(specialCharacter)) {
                checkValue = "false";
                break;
            } else { checkValue = "true"; }
        }
        if (checkValue == "false") {
            refuse(inputName, alertName);
            return false;
        } else {
            agree(inputName, alertName);

            text = text.toLowerCase();
            text = text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
            for (let i = 0; i < text.length; i++) {
                if (text[i] == " " && text[i + 1] != " ") {
                    text = text.replace(
                        text[i] + text[i + 1],
                        text[i] + text[i + 1].toUpperCase()
                    );
                }
                if (text[i] == " " && text[i + 1] != lowercaseRegex) {
                    text = text.replace(text[i], "");
                    i--;
                }
            }
            const x = text.match(uppercaseRegex);
            const array = text.split(uppercaseRegex);
            let array2 = "";
            for (var i = 0; i < text.length; i++) {
                if (text[i] == text[i].toUpperCase()) {
                    array2 += text[i];
                }
            }
            array3 = array2.split("");
            var newarray = "";
            for (let i = 0; i < array2.length; i++) {
                newarray = newarray + array[i] + " " + array3[i];
            }
            newarray += array[array.length - 1];
            inputName.value = newarray.trim();
            return true;
        }
    }
}

//function check date
function checkDateOfBirth(dateInput, alertDate) {
    const regexDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:19\d{2}|20[01][0-9]|2020)$/;
    let inputDate = document.getElementById(dateInput);
    let dateAlert = document.getElementById(alertDate);
    let checkDate = regexDate.test(inputDate.value);

    if (checkDate) {
        agree(inputDate, dateAlert);
        return true;
    } else {
        refuse(inputDate, dateAlert);
        return false;
    }
}

// check phone number 
function checkPhoneNumber(phone, alert) {
    let inputPhone = document.getElementById(phone);
    let alertPhone = document.getElementById(alert);

    if (inputPhone.value[0] != 0 || inputPhone.value.length != 10) {
        refuse(inputPhone, alertPhone);
        return false;
    } else {
        agree(inputPhone, alertPhone);
        return true;
    }
}

//check pass 
function checkPassword(pass, alert) {
    const regexPass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let passWord = document.getElementById(pass);
    let alertPassword = document.getElementById(alert);
    let testPass = regexPass.test(passWord.value);

    if (testPass) {
        agree(passWord, alertPassword);
        return true;
    } else {
        refuse(passWord, alertPassword);
        return false;
    }
}

//comfirm password
function comfirmPass(pass, comfirmPass, alert) {
    let passWord = document.getElementById(pass);
    let comfirm = document.getElementById(comfirmPass);
    let comfirmAlert = document.getElementById(alert);
    var valuePass = passWord.value;
    var valueComfirm = comfirm.value;

    if (comfirm.value != "") {
        if (valuePass == valueComfirm) {
            agree(comfirm, comfirmAlert);
            return true;
        } else {
            refuse(comfirm, comfirmAlert);
            return false;
        }
    } else {
        refuse(comfirm, comfirmAlert);
        return false;
    }
}
// Add data
function data(dataText, altImg, showData, img) {
    const inputData = document.getElementsByClassName(dataText);
    const titleImg = document.getElementsByClassName(altImg)[1];
    const data = document.getElementsByClassName(showData);
    let imgAdd = document.getElementById(img);

    imgAdd.src = reader.result;
    if (imgAdd.src == reader.result) {
        titleImg.style.display = "none";
    }
    for (let i = 0; i < data.length; i++) {
        if (i == 2) {
            data[i].innerHTML = inputData[i].value.slice(0, 3) + "-" + inputData[i].value.slice(3, 6) + "-" + inputData[i].value.slice(6);
        } else {
            data[i].innerHTML = inputData[i].value;
        }
    }
}

function comfirmPassword() {
    comfirmPass("passWord", "comfirmPass", "comfirmAlert");
}

function checkPass() {
    checkPassword("passWord", "alertPassword")
}
function checkPhone() {
    checkPhoneNumber("inputPhone", "alertPhone")
}

function checkDate() {
    checkDateOfBirth("inputDate", "dateAlert");
}

function checkInputName() {
    processInputName("alertName", "inputName");
}

//function Button Add
function addData() {
    let labelAlert = document.getElementsByClassName("labelAlert");
    checkInputName();
    checkEmail();
    checkPhone();
    checkDate();
    checkPass();
    comfirmPassword();
    let check;
    for (let i = 0; i < labelAlert.length; i++) {
        if (labelAlert[i].style.color == "red") {
            check = "false";
        } else check = "true";
    }
    if (check == "true") {
        data("inputData", "centered", "data", "imageAdd");
    }
}

//press keyboard shift, delete
document.onkeyup = function (e) {
    const shiftButton = 16;
    const deleteButton = 46;

    switch (e.which) {
        case shiftButton:
            addData();
            break;
        case deleteButton:
            functionReset();
            break;
    }
}
