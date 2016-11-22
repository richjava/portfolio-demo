var projects = null;
$.getJSON( "json/projects.json", function( data ) {
    projects = data;
    console.log(projects);
});
