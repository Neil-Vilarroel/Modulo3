$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.chucknorris.io/jokes/random",
        dataType: "json",
        success: function (data) {
            $('.chiste').text(data.value);
    }
    });
});

