/*clicking project 1 button modal code*/
$("#proj-button-1").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").removeClass("hidden");
    console.log("modal overlay loaded");
    $("#project-modal").removeClass("hidden");
    $("#modal-content-1").removeClass("hidden");
    console.log("modal content 1 shown");
    $("#modal-content-2").addClass("hidden");
    console.log("modal content 2 hidden");
    $("#modal-content-3").addClass("hidden");
    console.log("modal content 3 hidden");

    // ↑ action snippets ↑

}); // ← click event

/*close modal code */

$("#modal-close").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").addClass("hidden");

    // ↑ action snippets ↑

}); // ← click event
