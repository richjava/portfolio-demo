var projects = null;
var cats = null;
$('#cats').on('click', 'li', function(){
    //console.log($(this).attr('data-cat'));
    $('#stalactite-loaded').empty();
    var cat = $(this).attr('data-cat');
    var index = $(this).attr('data-index');
    var jsonCat = cats[parseInt(index)];
    projects = jsonCat[cat];
    console.log(projects);
    //fill the div with projects
    for(var i = 0; i < projects.length; i++){
        $('#stalactite-loaded').append('<div class="item  col-xs-4 col-lg-4"><div class="thumbnail"><img class="group list-group-image" src="' + projects[i].image_url + '" alt=""><div class="caption"><h4 class="group inner list-group-item-heading">' + projects[i].name + '</h4> </div> </div></div>');
    }
});
$.getJSON( "json/projects.json", function( data ) {
    cats = data.categories;
});
