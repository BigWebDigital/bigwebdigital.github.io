/*Loader*/

var myVar;

function myLoader() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("site").style.display = "block";
}