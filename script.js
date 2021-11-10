
var btnAdd = document.getElementById("btnAdd");
const reader = new FileReader();
const findL = /[a-z]|á|à|ạ|ã|ả|ă|ắ|ằ|ẳ|ặ|ẵ|â|ấ|ầ|ẫ|ẩ|ậ|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ể|ễ|ệ|ì|í|ĩ|ị|ỉ|ò|ó|ỏ|õ|ọ|ô|ố|ồ|ộ|ổ|ỗ|ơ|ớ|ờ|ở|ợ|ỡ|ú|ù|ủ|ụ|ũ|ư|ứ|ừ|ữ|ử|ự|ý|ỳ|ỹ|ỵ|ỷ|đ/g;
const findU = /[A-Z]|Á|À|Ạ|Ã|Ả|Ă|Ắ|Ằ|Ẳ|Ặ|Ẵ|Â|Ấ|Ầ|Ẫ|Ẩ|Ậ|É|È|Ẽ|Ẻ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ì|Í|Ĩ|Ị|Ỉ|Ò|Ó|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ộ|Ổ|Ỗ|Ơ|Ớ|Ờ|Ở|Ợ|Ỡ|Ú|Ù|Ủ|Ụ|Ũ|Ư|Ứ|Ừ|Ữ|Ử|Ự|Ý|Ỳ|Ỹ|Ỵ|Ỷ|Đ/g;
const specialCharacter = /\~ | \`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\{|\[|\}|\]|\||\\|\:|\;|\"|\'|\<|\,|\>|\.|\?|\//g;
const rEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const findNumber = /[0-9]/g;


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

//function Button Add

function addData() {
    const titleImg = document.getElementsByClassName('centered')[1];
    let inputData = document.getElementsByClassName("inputData");
    let data = document.getElementsByClassName("data");
    let imgAdd = document.getElementById("imageAdd");
    let lableArlet = document.getElementsByClassName("lableArlet");

    // console.log(inputData[0].value);
    if (inputData[0].value == "" || inputData[1].value == "" || inputData[2].value == "" || inputData[3].value == "") {
        for (let i = 0; i < lableArlet.length; i++) {
            if (inputData[i].value == "") {
                lableArlet[i].style.color = "red";
                lableArlet[i].innerHTML = "Chưa nhập.";
            }
            else {
                lableArlet[i].innerHTML = "";
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
            lableArlet[i].innerHTML = "&checkmark;";
            lableArlet[i].style.color = "lightgreen";

        }

    }
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
        btnAdd.disabled = true;
        return false;
    }

}


//function check input name
function checkInput() {
    let inputData = document.getElementsByClassName("inputData")[0];
    var text = inputData.value.trim();
    let lableArlet = document.getElementsByClassName("lableArlet")[0];

    var number;
    // console.log(text.length);
    if (text.length > 50) {
        console.log(text.length);
        lableArlet.innerHTML = "phải < 50";
        lableArlet.style.color = "red";
        inputData.style.border = "1px solid red";
        btnAdd.disabled = true;

    }
    else {
        for (let i = 0; i < text.length; i++) {
            if (text[i] != /\s/g && text[i] == text[i].match(findNumber) || text[i] == text[i].match(specialCharacter)) {
                console.log(text[i]);
                number = 1;
                break;
            }

            else { number = 0; }
        }
        if (number == 1) {
            lableArlet.innerHTML = "Phải là chữ";
            lableArlet.style.color = "red";
            inputData.style.border = "1px solid red";
            btnAdd.disabled = true;

        }
        else {
            btnAdd.disabled = false;
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

        }
    }
    if (inputData.value == "") {
        inputData.style.border = "1px solid red";
        btnAdd.disabled = true;
        lableArlet.innerHTML = "&#8861;";
        lableArlet.style.color = "red";
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