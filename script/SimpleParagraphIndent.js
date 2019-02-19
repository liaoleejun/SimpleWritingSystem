$(document).ready(function() {
    $('h3, h2').each(function () {
        // $(this).nextAll('p').first().css({ "color":"green"});
        $(this).nextAll('p').first().addClass("firstParagraph");
    });
});