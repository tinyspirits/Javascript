function selectAll() {
    const check = document.getElementById("selectAllRow");
    const checkValue = document.getElementsByClassName("checkboxInput");
    for (let i = 0; i < checkValue.length; i++) {
        if (check.checked == true) {
            checkValue[i].checked = true;
        } else {
            checkValue[i].checked = false;
        }
    }
}

//function Add
function addRow() {
    const titleRow = document.getElementsByClassName("titleRow");
    const createRow = document.createElement("TR");
    const createRowTd = document.createElement("TD");
    for (let i = 0; i <= titleRow.length; i++) {
        if (i == 0) {
            let inputTag = document.createElement("INPUT");
            createRow.appendChild(createRowTd);
            createRowTd.appendChild(inputTag);
            inputTag.setAttribute("class", "checkboxInput");
            inputTag.type = "checkbox";
        } else {
            let createRowTd = document.createElement("TD");
            createRow.appendChild(createRowTd);
            createRowTd.addEventListener("dblclick", edit);
            createRowTd.addEventListener('focusout', (event) => {
                createRowTd.contentEditable = false;
            });
            if (i == titleRow.length) {
                let createButton = document.createElement("input");
                createButton.type = "submit";
                createButton.setAttribute("class", "deleteButton");
                createButton.onclick = function () {
                    const deleteButton = document.getElementsByClassName("deleteButton");
                    for (let i = 0; i < deleteButton.length; i++) {
                        createRow.setAttribute("id", ("delete" + i));
                        document.getElementById("delete" + i).remove();
                        break;
                    }
                }
                createButton.value = "Delete";
                createRowTd.appendChild(createButton);
            }
            function edit() {
                if (i == titleRow.length) {
                    createRowTd.contentEditable = false;
                } else {
                    createRowTd.contentEditable = true;
                }
            }
        }

    }
    document.getElementById("tableData").appendChild(createRow);
}

//function Delete
function deleteRow() {
    const checkboxInput = document.getElementsByClassName("checkboxInput");
    for (let i = 0; i < checkboxInput.length; ++i) {
        if (checkboxInput[i].checked == true) {
            document.getElementById("tableData").deleteRow(i + 1);
            i--;
        }
    }
}
