var num = 1;

function adelante() {

    if (num <= 7) {

        var foto = document.getElementById("foto");
        foto.setAttribute("src", "foto" + String(num) + ".jpg");

        num++;

    } else {
        num = 1;
    }
}

function atraz() {

    if (num >= 1) {


        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";

        num--;

    } else {
        num = 7;
    }
}