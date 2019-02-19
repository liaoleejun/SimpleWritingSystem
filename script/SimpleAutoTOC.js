$(document).ready(function() {
    $(document.body).prepend('<div id="toc"></div>');
    $("#toc").append('<p style="text-indent: 0"><b>Table of Content</b></p>');
    $("h1, h2, h3, h4").each(function(i) {
        let current = $(this);
        current.attr("id", "title" + i);

        // $("#toc").append("<a id='link" + i + "' href='#title" + i + "' title='" + current.prop("tagName") + "'>" + current.html() + "</a>");
        $("#toc").append("<a id='link" + i + "' href='#title" + i + "' title='" + current.prop("tagName") + "'>" + current.text() + "</a>");
    });
});
