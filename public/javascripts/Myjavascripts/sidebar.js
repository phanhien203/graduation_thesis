let expandButton = null;
let hideButton = null;
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

function clickHideSide() {
    if (hideButton) {
        $('#sidebar').css({ "margin-left": "-250px" });
        $('.overlay, .close-button').css({ "display": "none"});
        $('.hide-nav-bar').css({ "position": "relative", "left": "0px"});
        $('.hide-button').css({ "display": "block"});
        hideButton = !hideButton;
    } else {
        $('#sidebar').css({ "margin-left": "0px" });
        $('.overlay, .close-button').css({  "display": "block"});
        $('.hide-nav-bar').css({ "position": "fixed", "z-index": "111", "left": "210px"});
        $('.hide-button').css({ "display": "none"});
        hideButton = !hideButton;
    }
}

const menuItems = document.querySelectorAll('.menu-item');