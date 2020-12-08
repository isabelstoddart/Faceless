// load JSON using d3.json
d3.json('./allnudesdrawings.json')
  .then( json => {
        filteredJson = json.filter(function (n){
            return (n.faceDetected == false)
        })
      // execute our 
      // display images function
        displayImagesc(filteredJson);
  }); 

// this function creates all
// of our DOM elements
function displayImagesc(json){
    // select a <div> with an id of "app"
    // this is where we want all of our
    // images to be added
    let app  = d3.select('#appc').text('');

    // take our JSON and sort it
    // date descending
    //let data = json.sort( (a,b) => (b.date > a.date) ? 1 : -1 );
    // // date ascending
    // let data = json.sort( (a,b) => (a.date > b.date) ? 1 : -1 );


    // define "cards" for each item
    let card = app.selectAll('div.smithsonian-card')
                .data(json)
                .join('div')
                .attr('class', 'smithsonian-card');

    // create a div with a class of "image"
    // and populate it with an <img/> tag
    // that contains our filepath
    card.append('div')
        .attr('class', 'image')
        .append('img')
        .attr('src', d => {
            // all our images are in the "images"
            // folder which we will need to 
            // add to our filename first
            return './Cropped/' + d.fileName
        });

    // create a paragraph that will
    // hold the object date
    //card.append('p')
        //.attr('class', 'object-date')
        //.text(d=>d.date);

    // create a heading tag
    // that will be the object title
    //card.append('h2')
        //.attr('class', 'title')
        //.text(d=>d.title);
}
