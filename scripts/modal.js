/*clicking project 1 button modal code*/
$("#proj-button-1").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").removeClass("hidden");
    console.log("modal overlay loaded");
    $("#modal-content-1").removeClass("hidden");
    console.log("modal content 1 shown");
    $("#modal-content-2").addClass("hidden");
    console.log("modal content 2 hidden");
    $("#modal-content-3").addClass("hidden");
    console.log("modal content 3 hidden");

    // ↑ action snippets ↑

}); // ← click event

/*clicking project 2 button modal code*/
$("#proj-button-2").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").removeClass("hidden");
    console.log("modal overlay loaded");
    $("#modal-content-2").removeClass("hidden");
    console.log("modal content 2 shown");
    $("#modal-content-1").addClass("hidden");
    console.log("modal content 1 hidden");
    $("#modal-content-3").addClass("hidden");
    console.log("modal content 3 hidden");

    // ↑ action snippets ↑

}); // ← click event

/*clicking project 3 button modal code*/
$("#proj-button-3").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").removeClass("hidden");
    console.log("good");
    $("#modal-content-3").removeClass("hidden");
    console.log("good");
    $("#modal-content-1").addClass("hidden");
    console.log("good");
    $("#modal-content-2").addClass("hidden");
    console.log("good");



    // ↑ action snippets ↑

}); // ← click event



/*close button modal code */
$("#modal-close").on("click", function () { // ← click event

    // ↓ action snippets ↓
    $("#modal-overlay").addClass("hidden");

    // ↑ action snippets ↑

}); // ← click event


