function buttonBold() {
    return document.execCommand('Bold');
}

function buttonItalic() {
    return document.execCommand('Italic');
}

function resetLeft() {
    document.getElementById("inputChatLeft").innerHTML = "";
}

function resetRight() {
    document.getElementById("inputChatRight").innerHTML = "";
}

function functionEnterLeft(event) {
    const x = event.key;
    if (x == "Enter") {
        return sendChatLeft();
    }
}
function functionEnterRight(event) {
    const x = event.key;
    if (x == "Enter") {
        return sendchatRight();
    }
}

//function ShowChat
function show(text, formChat, position, imgSrc) {
    const inputChat = document.getElementById(text).innerHTML;
    const para = document.createElement("DIV");
    const checkMessage = /(.|\s)*\S(.|\s)*/;

    if (checkMessage.test(inputChat) == false) {
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
