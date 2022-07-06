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