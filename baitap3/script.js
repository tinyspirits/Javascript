function property(id, propertyText) {
    document.execCommand(propertyText);
    let element = document.getElementById(id);
    element.classList.toggle("active");
}

function buttonItalicLeft() {
    property("propertyItalic", "Italic");
}

function buttonItalicRight() {
    property("propertyItalicRight", "Italic");

}

function buttonBoldLeft() {
    property("propertyBold", "Bold");
}

function buttonBoldRight() {
    property("propertyBoldRight", "Bold");
}

function resetProperty(propertyItalic, propertyBold) {
    document.getElementById(propertyItalic).classList.remove("active");
    document.getElementById(propertyBold).classList.remove("active");
}

function resetLeft() {
    document.getElementById("inputChatLeft").innerHTML = "";
    resetProperty("propertyItalic", "propertyBold");
}

function resetRight() {
    document.getElementById("inputChatRight").innerHTML = "";
    resetProperty("propertyItalicRight", "propertyBoldRight");
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
