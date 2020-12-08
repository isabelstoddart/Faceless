let dataset, svg
let salarySizeScale, salaryXScale, categoryColorScale
let simulation, nodes
let categoryLegend, salaryLegend

const margin = {left: 20, top: 50, bottom: 50, right: 20}
let width = 1000 - margin.left - margin.right
let height = 950 - margin.top - margin.bottom


let scroll = scroller()
    .container(d3.select('#container'))
scroll()

let lastIndex, activeIndex = 0

scroll.on('active', function(index){
    d3.selectAll('.step')
        .transition().duration(500)
        .style('opacity', function (d, i) {return i === index ? 1 : 0.1;});
    lastIndex = activeIndex;

})

scroll.on('progress', function(index, progress){
    if (index == 2 & progress > 1){

    }
})
