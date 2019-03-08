// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){

    $('.gallery').empty();
    var searchTerm = $('#search-term').val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            var randomgifboi = Math.floor(Math.random() * response.data.length);
            $('.gallery').append(
                '<div class="col-md-offset-4 col-md-4 thumb">\
                    <a class="thumbnail" href =' + response.data[randomgifboi].images.fixed_width.url + '>\
                        <img src=' + response.data[randomgifboi].images.fixed_width.url + '/>\
                    </a>\
                </div>'
            );
        },
    }); 
});


