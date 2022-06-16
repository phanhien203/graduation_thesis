let expandButton = null;
function clickExpand() {
    if (expandButton) {
        $('#sidebar').css({ "width": "250px" });
        $('.menu-item> p, .narrow-sidebar').css({ "display": "block" });
        $('.expand-sidebar').css({ "border": "none", "transform": "rotate(0deg)" });
        expandButton = !expandButton;
    } else {
        $('#sidebar').css({ "width": "70px" });
        $('.menu-item> p, .narrow-sidebar').css({ "display": "none" });
        $('.expand-sidebar').css({ "border": "1px solid #fff", "transform": "rotate(180deg)"  });
        expandButton = !expandButton;
    }
}

const menuItems = document.querySelectorAll('.menu-item');