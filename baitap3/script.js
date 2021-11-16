function buttonItalic() {
    document.execCommand('Italic');
    let element = document.getElementById("propertyItalic");
    element.classList.toggle("active");
}
function buttonItalicRight() {
    document.execCommand('Italic');
    let element = document.getElementById("propertyItalicRight");
    element.classList.toggle("active");
}
function buttonBold() {
    document.execCommand('Bold');
    let element = document.getElementById("propertyBold");
    element.classList.toggle("active");
}
function buttonBoldRight() {
    document.execCommand('Bold');
    let element = document.getElementById("propertyBoldRight");
    element.classList.toggle("active");
}
function resetLeft() {
    document.getElementById("inputChatLeft").innerHTML = "";
    let propertyItalicRight = document.getElementById("propertyItalic");
    let propertyBoldRight = document.getElementById("propertyBold");
    propertyItalicRight.classList.remove("active");
    propertyBoldRight.classList.remove("active");

}

function resetRight() {
    document.getElementById("inputChatRight").innerHTML = "";
    let propertyItalicRight = document.getElementById("propertyItalicRight");
    let propertyBoldRight = document.getElementById("propertyBoldRight");
    propertyItalicRight.classList.remove("active");
    propertyBoldRight.classList.remove("active");
}

function enterLeft(event) {
    const x = event.key;
    if (x == "Enter") {
        return sendChatLeft();
    }
}
function enterRight(event) {
    const x = event.key;
    if (x == "Enter") {
        return sendchatRight();
    }
}

//function ShowChat
function show(text, formChat, position, imgSrc) {
    const inputChat = document.getElementById(text).innerHTML;
    const para = document.createElement("DIV");
    const checkMessage = /(.|\s)*\S(.|\s)*(.|\n)/;

    if (checkMessage.test(inputChat) == false) {
        document.getElementById(text).innerHTML = "";
        alert("Bạn phải nhập dữ liệu!");
    } else {
        const addTagP = document.createElement("P");
        const img = document.createElement("img");

        para.setAttribute("class", "container");
        img.src = imgSrc;
        para.appendChild(img);
        para.appendChild(addTagP);
        addTagP.innerHTML = inputChat;
        document.getElementById(formChat).appendChild(para);
        document.getElementById(text).innerHTML = "";

        const boxChatRight = document.createElement("DIV");
        const addTagPRight = document.createElement("P");
        const addImg = document.createElement("img");

        boxChatRight.setAttribute("class", "container darker");
        boxChatRight.appendChild(addImg);
        boxChatRight.appendChild(addTagPRight);
        addTagPRight.innerHTML = inputChat;
        addImg.src = imgSrc;
        addImg.setAttribute("class", "right");
        document.getElementById(position).appendChild(boxChatRight);
    }
}

function sendChatLeft() {
    show("inputChatLeft", "showChat", "showChatRight", "/avatar/Tiny.jpg");
}

function sendchatRight() {
    show("inputChatRight", "showChatRight", "showChat", "/avatar/Turtle.jpg");
}
