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
