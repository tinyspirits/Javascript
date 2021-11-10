const findL = /[a-z]|á|à|ạ|ã|ả|ă|ắ|ằ|ẳ|ặ|ẵ|â|ấ|ầ|ẫ|ẩ|ậ|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ể|ễ|ệ|ì|í|ĩ|ị|ỉ|ò|ó|ỏ|õ|ọ|ô|ố|ồ|ộ|ổ|ỗ|ơ|ớ|ờ|ở|ợ|ỡ|ú|ù|ủ|ụ|ũ|ư|ứ|ừ|ữ|ử|ự|ý|ỳ|ỹ|ỵ|ỷ|đ/g;
const findU = /[A-Z]|Á|À|Ạ|Ã|Ả|Ă|Ắ|Ằ|Ẳ|Ặ|Ẵ|Â|Ấ|Ầ|Ẫ|Ẩ|Ậ|É|È|Ẽ|Ẻ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ì|Í|Ĩ|Ị|Ỉ|Ò|Ó|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ộ|Ổ|Ỗ|Ơ|Ớ|Ờ|Ở|Ợ|Ỡ|Ú|Ù|Ủ|Ụ|Ũ|Ư|Ứ|Ừ|Ữ|Ử|Ự|Ý|Ỳ|Ỹ|Ỵ|Ỷ|Đ/g;
const specialCharacter = /\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\[|\}|\]|\||\\|\:|\;|\"|\'|\<|\,|\>|\.|\?|\//;
const rEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const findNumber = /[0-9]/g;
const rDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const rPass = /^(\w)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}|$/;

const reader = new FileReader();

document.onkeyup = function (e) {
    // console.log(e.which);
    const shiftButton = 16;
    const deleteButton = 46;

    switch (e.which) {
        case shiftButton:
            addData();
            break;
        case deleteButton:
            functionReset();
            break
    }
}


// function reset 

function functionReset() {
    document.getElementById("formR").reset();
    location.reload();
}


//function load image
function convertImg(x) {
    const imageUpload = document.getElementById(x);
    reader.addEventListener("load", function () {
        // convert image file to base64 string
        imageUpload.src = reader.result;
    }, false);
}

function imageLoad() {
    const titleImg = document.getElementsByClassName('centered')[0];
    const imgLoad = document.getElementById("imgLoad").files[0];
    const x = convertImg("imageUpload");
    reader.readAsDataURL(imgLoad);
    titleImg.style.display = "none";
}


//check email
function checkEmail() {
    let inputData = document.getElementsByClassName("inputData")[1];
    let lableArlet = document.getElementsByClassName("lableArlet")[1];
    var x = rEmail.test(inputData.value);
    // console.log(x);

    if (x) {
        // lableArlet.innerHTML = x;
        lableArlet.innerHTML = "&checkmark;";
        lableArlet.style.color = "lightgreen";
        inputData.style.border = "1px solid lightgreen";
        return true;
    }
    else {
        lableArlet.innerHTML = "&#8861;";
        lableArlet.style.color = "red";
        inputData.style.border = "1px solid red";
        return false;
    }

}

//function check date
function checkDate() {
    let inputData = document.getElementsByClassName("inputData")[3];
    let lableArlet = document.getElementsByClassName("lableArlet")[3];
    var x = rDate.test(inputData.value);
    // console.log(x);
    if (x) {
        // lableArlet.innerHTML = x;
        lableArlet.innerHTML = "&checkmark;";
        lableArlet.style.color = "lightgreen";
        inputData.style.border = "1px solid lightgreen";
        return true;
    }
    else {
        lableArlet.innerHTML = "&#8861;";
        lableArlet.style.color = "red";
        inputData.style.border = "1px solid red";
        // btnAdd.disabled = true;
        return false;
    }

}
//function check input name
function checkInputName() {
    let inputData = document.getElementsByClassName("inputData")[0];
    var text = inputData.value.trim();
    let lableArlet = document.getElementsByClassName("lableArlet")[0];

    var number;
    // console.log(text.length);
    if (text.length > 50) {
        // console.log(text.length);
        lableArlet.innerHTML = "phải < 50";
        lableArlet.style.color = "red";
        inputData.style.border = "1px solid red";
        return false;

    }
    if (inputData.value == "") {
        inputData.style.border = "1px solid red";
        lableArlet.innerHTML = "&#8861;";
        lableArlet.style.color = "red";
        return false;
    }
    else {
        for (let i = 0; i < text.length; i++) {
            if (text[i] != /\s/g && text[i] == text[i].match(findNumber) || text[i] == text[i].match(specialCharacter)) {
                // console.log(text[i]);
                number = 1;
                break;
            }

            else { number = 0; }
        }
        if (number == 1) {
            lableArlet.innerHTML = "Phải là chữ";
            lableArlet.style.color = "red";
            inputData.style.border = "1px solid red";
            return false;

        }
        else {
            inputData.style.border = "1px solid lightgreen";
            lableArlet.innerHTML = "&checkmark;";
            lableArlet.style.color = "lightgreen";

            text = text.toLowerCase();
            text = text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
            // console.log(text);


            for (let i = 0; i < text.length; i++) {
                if (text[i] == " " && text[i + 1] != " ") {
                    text = text.replace(
                        text[i] + text[i + 1],
                        text[i] + text[i + 1].toUpperCase()
                    );
                }
                if (text[i] == " " && text[i + 1] != findL) {
                    // console.log(i);
                    text = text.replace(text[i], "");
                    i--;
                }
            }

            // console.log(text);

            const x = text.match(findU);
            const array = text.split(findU);
            let array2 = "";
            for (var i = 0; i < text.length; i++) {
                if (text[i] == text[i].toUpperCase()) {
                    array2 += text[i];
                }
            }
            array3 = array2.split("");
            // console.log(array3);
            var newarray = "";
            for (var i = 0; i < array2.length; i++) {
                newarray = newarray + array[i] + " " + array3[i];
            }
            newarray += array[array.length - 1];
            // console.log(newarray);

            inputData.value = newarray.trim();
            return true;
        }

    }

}
// check phone number 
function checkPhone() {
    let inputData = document.getElementsByClassName("inputData")[2];
    let lableArlet = document.getElementsByClassName("lableArlet")[2];
    if (inputData.value[0] != 0 || inputData.value.length != 10) {
        inputData.style.border = "1px solid red";
        lableArlet.innerHTML = "&#8861;";
        lableArlet.style.color = "red";
        return false
    }
    else {
        inputData.style.border = "1px solid lightgreen";
        lableArlet.innerHTML = "&checkmark;";
        lableArlet.style.color = "lightgreen";
        return true
    }
}

//check pass 
function checkPass() {
    let passWord = document.getElementsByClassName("passWord")[0];
    let lableArlet = document.getElementsByClassName("lableArlet")[4];
    var x = rPass.test(passWord.value);
    var y = passWord.value.search(specialCharacter);
    // console.log(passWord.value);
    // console.log(x);
    // console.log(y);
    if (x && y != -1) {
        // lableArlet.innerHTML = x;
        lableArlet.innerHTML = "&checkmark;";
        lableArlet.style.color = "lightgreen";
        passWord.style.border = "1px solid lightgreen";
        return true;
    }
    else {
        lableArlet.innerHTML = "&#8861;";
        lableArlet.style.color = "red";
        passWord.style.border = "1px solid red";
        return false;
    }

}
//comfirm password
function comfirmPassword() {
    let passWord = document.getElementsByClassName("passWord")[0];
    let comfirm = document.getElementsByClassName("passWord")[1];
    let lableArlet = document.getElementsByClassName("lableArlet")[5];
    var x = passWord.value;
    var y = comfirm.value;
    // console.log(x);
    // console.log(y);
    if (comfirm.value != "") {
        if (y == x) {
            lableArlet.innerHTML = "&checkmark;";
            lableArlet.style.color = "lightgreen";
            comfirm.style.border = "1px solid lightgreen";
            return true;
        }
    }

    else {
        lableArlet.innerHTML = "&#8861;";
        lableArlet.style.color = "red";
        comfirm.style.border = "1px solid red";
        return false;
    }
}

//function Button Add

function addData() {
    const titleImg = document.getElementsByClassName('centered')[1];
    let inputData = document.getElementsByClassName("inputData");
    let data = document.getElementsByClassName("data");
    let imgAdd = document.getElementById("imageAdd");
    let lableArlet = document.getElementsByClassName("lableArlet");
    var checkName = checkInputName().toString();
    var checkMail = checkEmail().toString();
    var checkDatetime = checkDate().toString();
    var checkPassword = checkPass().toString();
    var checkComfirm = comfirmPassword().toString();



    // console.log(inputData[0].value);
    if (checkName == "false" || checkMail == "false" || checkDatetime == "false" || checkPassword == "false" || checkComfirm == "false") {
        for (let i = 0; i < lableArlet.length; i++) {
            if (inputData[i].value == "") {
                lableArlet[i].style.color = "red";
                lableArlet[i].innerHTML = "Chưa nhập.";
                inputData[i].style.border = "1px solid red";

            }
            else {

            }
        }
    }
    else {
        btnAdd.disabled = false;
        const x = convertImg("imageUpload");
        imgAdd.src = reader.result;
        if (imgAdd.src == reader.result) {
            titleImg.style.display = "none";

        }
        for (let i = 0; i < data.length; i++) {
            data[i].innerHTML = inputData[i].value;
            // lableArlet[i].innerHTML = "";

        }

    }
}
