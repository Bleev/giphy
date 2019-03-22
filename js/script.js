// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var picurl;
$("#search-button").click(function(){

    $('.gallery').empty();
    var searchTerm = $('#search-term').val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC" ;
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            var randomgifboi = Math.floor(Math.random() * response.data.length);
            picurl = response.data[randomgifboi].images.fixed_width.url;
            $('.gallery').append(
                '<div class="mainthing">\
                    <a class="thumbnail" href =' + picurl + ' >\
                        <img src=' + picurl + '/>\
                    </a>\
                </div>'
            );
        },
    }); 
});
$("#mail-button").click(function(){
        var friendmail = $('#mail-term').val();
        var mailtolink = 'mailto:'+ friendmail + '?subject=giphy' + '&body=' + picurl;
        window.location.href = mailtolink;
});

