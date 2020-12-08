var total = 0;
var widthSquares = 46,
    heightSquares =45,
    squareSize = 10,
    squareValue = 0,
    gap = 1,
    theData2 = []; 

d3.csv("data2.csv").then(function(data2)
{

  var color = d3.scaleOrdinal()
    .domain(data2)
    //.range(["#ECECEC","#C99F88"])
    .range(["#3C1900","#DDC0B4","#C99F88","#B17E65","#A16A54","#855137","#5F3310"])

  //total
  total = d3.sum(data2, function(d) { return d.count; });

  //value of a square
  squareValue = total / (widthSquares*heightSquares);
  
  //remap data
  data2.forEach(function(d, i) 
  {
      d.count = +d.count;
      d.units = Math.floor(d.count/squareValue);
      theData2 = theData2.concat(
        Array(d.units+1).join(1).split('').map(function()
          {
            return {  squareValue:squareValue,                      
                      units: d.units,
                      population: d.count,
                      groupIndex: i};
          })
        );
  });

  width = (squareSize*widthSquares) + widthSquares*gap + 25;
  height = (squareSize*heightSquares) + heightSquares*gap + 25;

  var waffle2 = d3.select("#waffle2")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .selectAll("div")
      .data(theData2)
      .enter()
      .append("rect")
      .attr("width", squareSize)
      .attr("height", squareSize)
      .attr("fill", function(d)
      {
        return color(d.groupIndex);
      })
      .attr("x", function(d, i)
        {
          //group n squares for column
          col = Math.floor(i/heightSquares);
          return (col*squareSize) + (col*gap);
        })
      .attr("y", function(d, i)
      {
        row = i%heightSquares;
        return (heightSquares*squareSize) - ((row*squareSize) + (row*gap))
      })
      // .append("title")
      //   .text(function (d,i) 
      //     {
      //       return "Age range: " + data[d.groupIndex].age + " | " +  d.count + " , " + d.units + "%"
      //     });

   //add legend with categorical data
   var legend2 = d3.select("#legend2")
    .append("svg")
    .attr('width', 100)
    .attr('height', 150)
    .append('g')
    .selectAll("div")
    .data(data2)
    .enter()
      .append("g")
      .attr('transform', function(d,i){ return "translate(0," + i*20 + ")";});
  legend2.append("rect")
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", function(d, i) { return color(i)});
  legend2.append("text")
    .attr("x", 25)
    .attr("y", 13)
    .text( function(d) { return d.medium});

    //add value of a unit square
    var legend2 = d3.select("#legend2")
      .select('svg')
      .append('g')
      .attr('transform', "translate(100,0)");

// legend2.append("text")    
//         .attr('y', '14')    
//         .attr('font-size', '18px')
//         .text("Total: " + total)
//         .attr("fill", "#444444");
});