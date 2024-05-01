$("#botao").one("click", () => {
    $("#alert").addClass("aparecer");

    setTimeout(() => $("#alert").removeClass("aparecer"), 3000);
    $(".form-control").each(function () {
        $(this).val("");
    });
});

$(document).ready(function () {
    $(".card").mouseenter(function () {
        $(this).addClass("padding");
    });

    $(".card").mouseleave(function () {
        $(this).removeClass("padding");
    });
});
