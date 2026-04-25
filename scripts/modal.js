/*clicking project 1 button modal code*/
$("#proj-button-1").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").removeClass("hidden");
    $("#modal-content-1").removeClass("hidden");
    $("#modal-content-2").addClass("hidden");
    $("#modal-content-3").addClass("hidden");

    // ↑ action snippets ↑

}); // ← click event

/*clicking project 2 button modal code*/
$("#proj-button-2").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").removeClass("hidden");
    $("#modal-content-2").removeClass("hidden");
    $("#modal-content-1").addClass("hidden");
    $("#modal-content-3").addClass("hidden");

    // ↑ action snippets ↑

}); // ← click event

/*clicking project 3 button modal code*/
$("#proj-button-3").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").removeClass("hidden");
    $("#modal-content-3").removeClass("hidden");
    $("#modal-content-1").addClass("hidden");
    $("#modal-content-2").addClass("hidden");
    // ↑ action snippets ↑

}); // ← click event



/*close button modal code */
$("#modal-close").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").addClass("hidden");

    // ↑ action snippets ↑

}); // ← click event
