var projects = null;
var categories = null;
$('#cats').on('click', 'li', function(){
    //console.log($(this).attr('data-cat'));
    $('#stalactite-loaded').empty();
    var category = $(this).attr('data-cat');
    loadItems(category);
});


$.getJSON( "json/projects.json", function( data ) {
    categories = data.categories;
    loadItems('Web');
});

var loadItems = function(categoryName){
    //var jsonCat = cats[parseInt(index)];
    var category =  _.findWhere(categories, {'name': categoryName});
    //projects = jsonCat[cat];
    console.log(category);
    //fill the div with projects
    for(var i = 0; i < category.projects.length; i++){
        $('#stalactite-loaded').append('<div class="item  col-xs-4 col-lg-4"><div class="thumbnail"><img class="group list-group-image" src="' + category.projects[i].image_url + '" alt=""><div class="caption"><h4 class="group inner list-group-item-heading">' + category.projects[i].name + '</h4> </div> </div></div>');
    }
};
