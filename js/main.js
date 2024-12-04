function value() {
    var value = document.getElementById("demo").value;
    var result = document.getElementById("get");

    if (value == "") {
        result.innerHTML = "Please Insert Data";
        return false;
    } else if (isNaN(value)) {
        result.innerHTML = "Please Insert Number Not String";
        return false;
    } else {
        result.innerHTML = value * 50 +" "+"Eg Pound";
        return false;
    }
    }
