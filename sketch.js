// "d3" is globally available
// because we have the d3 code
// in our index.html file

// load JSON using d3.json
d3.json('./allnudesdrawings.json')
  .then( json => {
        filteredJson = json.filter(function (n){
            return (n.boobs == true)
        })
      // execute our 
      // display images function
        displayImagesb(filteredJson);
  }); 

// this function creates all
// of our DOM elements
function displayImagesb(json){
    // select a <div> with an id of "app"
    // this is where we want all of our
    // images to be added
    let app  = d3.select('#appb').text('');

    // take our JSON and sort it
    // date descending
    //let data = json.sort( (a,b) => (b.date > a.date) ? 1 : -1 );
    // // date ascending
    // let data = json.sort( (a,b) => (a.date > b.date) ? 1 : -1 );


    // define "cards" for each item
    let card = app.selectAll('div.smithsonian-cardb')
                .data(json)
                .join('div')
                .attr('class', 'smithsonian-cardb');

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
            return './Boobs/' + d.fileName
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