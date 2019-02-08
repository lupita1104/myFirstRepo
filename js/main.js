$(document).ready(function() {
    if (!localStorage.getItem("escArray")) {
        localStorage.setItem("escArray", JSON.stringify([{
            escuela: "primaria",           
            grado: "6to"
        }]));
        educacion = localStorage.getItem("escArray");
        educacion = JSON.parse(educacion);
        
    } else {
        educacion = localStorage.getItem("escArray");
        educacion = JSON.parse(educacion);
        printEsc();
    }

});

var educacion;


var x = 5;
var y = 10;
var someName = "Israel Salinas"
var weAreLearning = true;
var someFloat = 3.23423523


var someArray = [
    "mazda",
    "honda",
    "toyota",
    "renault"
]

var someObject = {
    company: "mazda",
    model: "mazda 6",
    color: "red",
    horsePower: "250hp",
    cilinders: "6"
}

[{
    company: "mazda",
    model: "mazda 6",
    color: "red",
    horsePower: "250hp",
    cilinders: "6"
}]

function printEsc() {
    $("#esc-list tbody").empty();
    console.log("printEsc");
    for (i = 0; i < educacion.length; i++) {
        //debugger;
        var objeto1 = educacion[i];
        console.log(objeto1);
        var escuela = objeto1.escuela;
        var grado = objeto1.grado;       
        console.log(escuela, grado);
        var rowHtml = "<tr>" +
            "<td>" + escuela + "</td>" +
            "<td>" + grado + "</td>" +           
            "</tr>"
        $("#esc-list tbody").append(rowHtml);
    }
}

function getEscData() {
    var escuela = $("#esc-escuela").val();
    var grado = $("#esc-grado").val(); 
    console.log(escuela, grado);
    var escObject = {
        escuela: escuela,
        grado: grado
    }
    educacion.push(escObject);
    printEsc();
    console.log(educacion)
    $("#add-esc-form input").val("");

    var escString = JSON.stringify(educacion)

    localStorage.setItem("escArray", escString);
}

$("#submit-button").on("click", function() {
    getEscData();
});