/*show/hide (toggle) the navigation menu (narrow screens) when the hamburger button is clicked:*/
$("#hamburger-button").on("click", function () { // ← click event

    // ↓ action snippets ↓
    if ($("#nav-menu").hasClass("hidden")) { // ← element has css class
        // ↓ action snippets (class on element) ↓
        $("#nav-menu").removeClass("hidden");
        // ↑ action snippets (class on element) ↑
    } else { // ← element has css class
        // ↓ action snippets (class not on element) ↓
        $("#nav-menu").addClass("hidden");
        // ↑ action snippets (class not on element) ↑
    } // ← element has css class
    // ↑ action snippets ↑
}); // ← click event

//page loading code
$(document).ready(function () { // ← page ready event

    if (window.matchMedia("(max-width: 700px)").matches) { // ← get browser width
        // ↓ action snippets (< width) ↓
        $("#nav-menu").addClass("hidden");
        // ↑ action snippets (< width) ↑
    } else { // ← get browser width
        // ↓ action snippets (> width) ↓
        $("#nav-menu").removeClass("hidden");
        // ↑ action snippets (> width) ↑
    } // ← get browser width
}); // ← page ready event


//page resizing code
//on window resize:
// if window is narrow:
//  add .hidden to #nav-menu
// else if window is wide:
// remove .hidden from #nav-menu

$(window).on("resize", function () { // ← resize browser window event

    // ↓ action snippets ↓
    if (window.matchMedia("(max-width: 700px)").matches) { // ← get browser width
        // ↓ action snippets (< width) ↓
        $("#nav-menu").addClass("hidden");
        // ↑ action snippets (< width) ↑
    } else { // ← get browser width
        // ↓ action snippets (> width) ↓
        $("#nav-menu").removeClass("hidden");
        // ↑ action snippets (> width) ↑
    } // ← get browser width
    // ↑ action snippets ↑
}); // ← resize browser window event
