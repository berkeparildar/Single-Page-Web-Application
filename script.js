window.onscroll = function () { myFunc() };
var dock = document.getElementById('myDock');
var stuck = dock.offsetTop;
function myFunc() {
    if (window.pageYOffset > stuck) {
        dock.classList.add("stuck");
    }
    else {
        dock.classList.remove("stuck");
    }
}
function drop() {
    document.getElementById("jDrop").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropB')) {
        var dd = document.getElementsByClassName("dropCont");
        var i;
        for (i = 0; i < dd.length; i++) {
            var toggle = dd[i];
            if (toggle.classList.contains('show')) {
                toggle.classList.remove('show');
            }
        }
    }
}