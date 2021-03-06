const reader = new FileReader();

// function reset 
function functionReset() {
    document.getElementById("formR").reset();
    location.reload();
}

// alert refuse
function refuse(inputName, labelName, content) {
    labelName.innerHTML = content;
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
    const arrayImg = ["jpeg", "jpg", "png", "bmp", "gif"];
    const titleImg = document.getElementsByClassName("centered")[0];
    const image = convertImg("imageUpload");
    var file = document.getElementById("imgLoad").files[0];
    var loadImg = file.type.split('/').pop().toLowerCase();

    if (arrayImg.includes(loadImg) == false) {
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
function validateMail(idInput, idEmail) {
    const regexEmail = /^[^<>()[\]\\,;:\%\_\.\*\{\}\[\]\|\/\+\=\?\'#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,3}))$/;
    let inputEmail = document.getElementById(idInput);
    let emailAlert = document.getElementById(idEmail);
    let checkRegex = regexEmail.test(inputEmail.value);

    if (checkRegex) {
        agree(inputEmail, emailAlert);
        return true;
    } else {
        refuse(inputEmail, emailAlert, "Ex:name@domain.com");
        return false;
    }
}

//function check input name
function processInputName(idName, idInput) {
    const lowercaseRegex = /[a-z]|??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???|??|??|???|???|???|??|???|???|???|???|???|??|??|??|???|???|??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???|??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|??/g;
    const uppercaseRegex = /[A-Z]|??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???|??|??|???|???|???|??|???|???|???|???|???|??|??|??|???|???|??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???|??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|??/g;
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
        for (let i = 0; i < text.length; i++) { //match tr??? v??? t???ng k?? t??? ki???m tra t???ng k?? t???
            if (text[i] != /\s/g && text[i] == text[i].match(findNumber) || text[i] == text[i].match(specialCharacter)) {
                checkValue = false;
                break;
            } else { checkValue = true; }
        }
        if (checkValue == false) {
            refuse(inputName, alertName, "T??n ph???i l?? ch???.");
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
            for (let i = 0; i < text.length; i++) {
                if (text[i] == text[i].toUpperCase()) {
                    array2 += text[i];
                }
            }
            var array3 = array2.split("");
            let newarray = "";
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
    const regexDate = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](?:19\d{2}|20[01][0-9]|2020)$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
    let inputDate = document.getElementById(dateInput);
    let dateAlert = document.getElementById(alertDate);
    let checkDate = regexDate.test(inputDate.value);

    if (checkDate) {
        agree(inputDate, dateAlert);
        return true;
    } else {
        refuse(inputDate, dateAlert, "nh???p dd/mm/yyyy,ex:28/02/2020");
        return false;
    }
}

// check phone number 
function checkPhoneNumber(idPhone, alert) {
    let inputPhone = document.getElementById(idPhone);
    let alertPhone = document.getElementById(alert);

    if (inputPhone.value[0] != 0 || inputPhone.value.length != 10) {
        refuse(inputPhone, alertPhone, "t???i thi???u 10 s??? v?? b???t ?????u l?? s??? 0");
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

    if (testPass && passWord.value.search(/\W/) != -1) {
        agree(passWord, alertPassword);
        return true;
    } else {
        refuse(passWord, alertPassword, "t???i thi???u 1 hoa, th?????ng, s???, k?? t??? ?????c bi???t");
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
            refuse(comfirm, comfirmAlert, "M???t kh???u kh??ng kh???p.");
            return false;
        }
    } else {
        refuse(comfirm, comfirmAlert, "M???t kh???u kh??ng kh???p.");
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
function checkEmail() {
    validateMail("inputEmail", "emailAlert");
}

function comfirmPassword() {
    comfirmPass("passWord", "comfirmPass", "comfirmAlert");
}

function checkPass() {
    checkPassword("passWord", "alertPassword");
}

function checkPhone() {
    checkPhoneNumber("inputPhone", "alertPhone");
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
            check = false;
            break;
        } else check = true;
    }
    if (check == true) {
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
