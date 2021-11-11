function selectValue() {
    const selectValue = document.getElementById("select").value;
    const city = document.getElementsByClassName("city");
    const odd = document.getElementById("odd");
    const even = document.getElementById("even");

    for (let i = 1; i <= city.length; i++) {
        if (selectValue != i) {
            city[i - 1].style.backgroundColor = "white";
        } else {
            city[i - 1].style.backgroundColor = "yellow";
        }
    }
    if (selectValue == "odd") {
        for (let i = 1; i <= city.length; i++) {
            if ((i - 1) % 2 == 0) {
                city[i - 1].style.backgroundColor = "yellow";
            }
        }
    } else if (selectValue == "even") {
        for (let i = 1; i <= city.length; i++) {
            if ((i) % 2 == 0) {
                city[i - 1].style.backgroundColor = "yellow";
            }
        }
    }
}
